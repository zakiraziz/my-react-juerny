import ComponentC from "./CompnonentC.react";

function CompnonentB(props){

    return(
        <div className="box">
            <h1>ComponentB</h1>
            <ComponentC user={props.user}/>
        </div>
    )
}
export default ComponentB
