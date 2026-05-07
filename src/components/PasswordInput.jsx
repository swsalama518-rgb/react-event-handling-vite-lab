// Code PasswordInput Component Here

function PasswordInput (){
    const handleTyping = (event) => {
        console.log("User is typing: ", event.target.value);
    }
    return(
        <input type="password" 
        onChange={handleTyping} 
        />
    )
    
}

export default PasswordInput;