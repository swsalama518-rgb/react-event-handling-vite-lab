// Code SubmitButton Component Here

function SubmitButton (){
    const handleMouseEnter = () => {
        console.log("Mouse entered the button!");
    };
    const handleMouseLeave = () => {
        console.log("Mouse left the button!");
    };
    return(
        <button 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        >
            Submit Password
        </button>
    )
}

export default SubmitButton;