import React from "react";
import { Input, Button, InputNumber, DatePicker, Radio } from "antd";
const fields = [
  {
    component: <Input />,
    name: "name",
    label: "Name",
    validateTrigger: "onSubmit",
    validations: {
      required: true
    }
  },
  {
    component: <Input />,
    name: "email",
    label: "Email",
    // validateTrigger: "onSubmit",
    validations: {
      nested: { type: "email" },
      required: true
    }
  },
  {
    component: <InputNumber />,
    name: "age",
    label: "Age",
    validateTrigger: "onSubmit",
    validations: {
      nested: {
        type: "number",
        min: 0,
        max: 99
      }
    }
  },
  {
    component: (
      <Radio.Group>
        <Radio value={1}>Male</Radio>
        <Radio value={2}>Female</Radio>
      </Radio.Group>
    )
  },
  {
    component: <DatePicker format={"MM/DD/YYYY"} />,
    name: "doj",
    label: "Date of joining",
    validateTrigger: "onSubmit",
    validations: {
      nested: { type: "date" }
    }
  },

  {
    component: <Input />,
    name: "website",
    label: "Website",
    validateTrigger: "onSubmit",
    validations: {
      nested: { type: "url" }
    }
  },
  {
    component: <Input.TextArea />,
    name: "intro",
    label: "Introduction",
    validateTrigger: "onSubmit"
  },
  {
    component: <label>ATSHT</label>,
    name: "captcha_text",
    label: "CAPTCHA"
  },
  {
    component: <Input />,
    name: "captcha",
    label: "Enter captcha",
    validateTrigger: "onSubmit",
    validations: {
      required: true,
      custom: {
        dependency: "captcha_text",
        condition: "eq",
        message: "Captcha don't match"
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
