// Code PasswordInput Component Here

function PasswordInput() {

  const handleTyping = () => {
    console.log("typing");
  };

  return (
    <input
      type="password"
      onChange={handleTyping}
    />
  );
}

export default PasswordInput;