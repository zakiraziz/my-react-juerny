import React, {useContext} from "react";
import { UserContext } from "./CompnonentA.jsx";
function CompnonentD(){

    return(
        <div className="box">
            <h1>ComponentD</h1>
            <h2>{`bye ${user}`}</h2>
        </div>
    )
}
export default ComponentD
