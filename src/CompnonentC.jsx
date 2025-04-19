import React, {useContext} from "react";
import { UserContext } from "./CompnonentA.jsx";
import ComponentD from "./CompnonentD.react";

function CompnonentC(){

    const user = useContext(UserContext);

    return(
        <div className="box">
            <h1>ComponentC</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentD />
        </div>
    )
}
export default ComponentC
