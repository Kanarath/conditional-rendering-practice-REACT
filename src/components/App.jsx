import React from "react";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <form className="form">
        <Input type="text" placeholder="User Name" />
        <Input type="password" placeholder="Password" />
        {!userIsRegistered && (
          <Input type="password" placeholder="Re-type Password" />
        )}
        {userIsRegistered ? (
          <Button button="Login" />
        ) : (
          <Button button="Register" />
        )}
      </form>
    </div>
  );
}

export default App;
