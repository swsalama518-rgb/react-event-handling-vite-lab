// Code PasswordInput Component Here

ffunction PasswordInput() {

  const handleTyping = () => {
    console.log("Entering password...");
  };

  return (
    <input
      type="password"
      onChange={handleTyping}
    />
  );
}

export default PasswordInput;