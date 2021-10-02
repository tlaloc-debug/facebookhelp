import React, {useState} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./index.css";

function App(){

    const [list, setlist] = useState([]);
    const [term, setterm] = useState("");
    const [label, setlabel] = useState(false);

    const search = () => {
        axios.get("https://thingproxy.freeboard.io/fetch/https://api.first.org/data/v1/teams").then((response)=>{
                        setlist(response.data.data);
                    }) 
    }

    const order = () => {
        setlabel(!label)
        setlist(list.reverse())
    }
    
    return (
        <div>
            <input type="text" onChange={(e) => {setterm(e.target.value)}} />
            <button onClick={search}>search</button>
            <button onClick={order}>{label ? "ASC" : "DESC"}</button>
            
            {list.filter((items) => {
                if (items.team.toLowerCase().includes(term.toLowerCase())){
                    return items
                }
            }).map((items) => {
                return (
                    <div>
                        <div className={"card"} key={items.team}>
                            <div>{items.team}</div>
                            <div>{items.stablishment}</div>
                            <div>{items.address}</div>
                            <div>{items.website}</div>
                            <div>{items.email}</div>
                            <div>{items.phone}</div>
                            
                        </div>
                    </div>
                )
            })}    
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));