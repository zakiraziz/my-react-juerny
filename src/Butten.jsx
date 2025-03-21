function Button(){
    let count = 0;

    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} stop Clicking me ${count} time/s`);
        }
        else{
            console.log(`${name} stope Clicking me!`)
        }
    };

    return(<Button onClick={() => handleClick("kiroo")}>Click me😊</Button>)
}
export default Button
