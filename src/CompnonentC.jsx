import ComponentD from "./CompnonentD.react";

function CompnonentC(props){

    return(
        <div className="box">
            <h1>ComponentC</h1>
            <ComponentD user={props.user}/>
        </div>
    )
}
export default ComponentC
