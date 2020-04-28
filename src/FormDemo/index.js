import React from "react";
import FormComponent from "./FormDemo";
import { fields } from "./data";

function FormDemo() {
  const onChange = payload => {
    console.log("Changed", payload);
  };
  const onSubmit = payload => {
    console.log("Success", payload);
  };
  return (
    <FormComponent fields={fields} onSubmit={onSubmit} onChange={onChange} />
  );
}
export default FormDemo;
