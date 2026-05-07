// Code SubmitButton Component Here

function SubmitButton() {

  const handleMouseEnter = () => {
    console.log("mouse enter");
  };

  const handleMouseLeave = () => {
    console.log("mouse leave");
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Submit Password
    </button>
  );
}

export default SubmitButton;