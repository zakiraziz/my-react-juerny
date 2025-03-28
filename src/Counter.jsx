import { useState } from "react";

function Counter(){

    const[count , setCount] = useState(0);

    const iecremrnt = () => {
        setCount(count + 1);
    }

    const decremrnt = () => {
        setCount(count - 1);
    }
   
    const reset = () => {
        setCount(0);
    }
    
    return(<div className="counter-container">
        <p className="counter-display">{count}</p>
        <button className="counter-button" onClick={decremrnt}>Decrement</button>
        <button className="counter-button" onClick={reset}>Reset</button>
        <button className="counter-button" onClick={increment}>Increment</button>
    </div>)
     
}
export default Counter
