import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom";

import axios from "axios";



const NoticesList = () => {
    
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async() => {
            const datas = await axios.get("https://thingproxy.freeboard.io/fetch/https://api.first.org/data/v1/teams");
            setData(datas.data.data);
        };
        getData();
    }, []);
    
    useEffect(() => {
        console.log(data);
    }, [data]);
    
    if(data === null){
        return <div>Load....</div>;
    }else{
        console.log(data);
        return (
            <div>
                {data.map((ele) => (
                    <>
                        <div>
                            {ele.team};
                        </div>
                    <br/>
                    </>
                ))}
            </div>  
        );
    };

    
    
};

ReactDOM.render(<NoticesList />, document.getElementById("root"));

