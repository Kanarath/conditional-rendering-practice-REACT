import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form() {
  return (
    <form className="form">
      <Input type="text" placeholder="User Name" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Re-type Password" />
      <Button button="Register" />
    </form>
  );
}

export default Form;
