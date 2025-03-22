function Button(){
    let count = 0;

    const handleClick = (e) => e.target.textContect = "OUCH! 😊"


    return(<Button onClick={(e) => handleClick("e")}>Click me😊</Button>)
}
export default Button
