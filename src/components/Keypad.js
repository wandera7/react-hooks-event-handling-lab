// Code Keypad Component Here
function Keypad(){
    function handleChange(){
        console.log('Entering password...')
    }

    return(
        <>
        <input onChange={handleChange}   type="password"  placeholder="password" />
        </>
    )
}
export default Keypad