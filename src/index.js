import React, {useState} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./index.css";

function App(){

    const [list, setlist] = useState([]);

    const search = () => {
        axios.get("https://thingproxy.freeboard.io/fetch/https://api.first.org/data/v1/teams").then((response)=>{
                        setlist(response.data.data);
                    }) 
    }

    return (
        <div>
            <button onClick={search}>search</button>
            {list.map((items) => {
                return (
                    <div>
                        <div className={"card"}>
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