import React, {useState} from "react";
import ComponentB from "./CompnonentB.react";

function CompnonentA(){

    const [user, setUser] = useState("ZakirCode")

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <ComponentB user={user}/>
        </div>
    )
}
export default ComponentA
