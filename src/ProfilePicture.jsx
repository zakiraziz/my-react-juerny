
function PlofilePicture(){

    const imageurl = ''

    const handleClick = (e) => e.traget.style.disply = "none";

    return(<img onClick={handleClick} src={imageurl}></img>)
}

export default PlofilePicture