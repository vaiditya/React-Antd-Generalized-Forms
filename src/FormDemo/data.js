import React from "react";
import { Input, Button } from "antd";
const fields = [
  {
    component: <Input />,
    name: "username",
    label: "User Name",
    type: "string",
    validations: {
      required: true
    }
  },
  {
    component: <Input.Password />,
    name: "password",
    label: "Password",
    type: "string",
    validateTrigger: "onSubmit",
    validations: {
      required: true,
      min: 8,
      custom: {
        condition: "sha",
        message: "Password should have letter 'a'"
      }
    }
  },
  {
    component: <Input.Password />,
    name: "confirm_password",
    label: "Re-type",
    type: "string",
    validations: {
      required: true,
      custom: {
        dependency: "password",
        condition: "eq",
        message: "Passwords don't match"
      }
    }
  },
  {
    component: (
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    )
  }
];
export { fields };
