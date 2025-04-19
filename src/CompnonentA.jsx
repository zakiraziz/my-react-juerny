import React, {useState, createContext} from "react";
import ComponentB from "./CompnonentB.react";

export const UserContext = createContext();

function CompnonentA(){

    const [user, setUser] = useState("ZakirCode")

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.provider value={user}/>
            <ComponentB user={user}/>
            <UserContext.provider/>
        </div>
    )
}
export default ComponentA
