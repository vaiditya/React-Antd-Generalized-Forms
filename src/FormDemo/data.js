import React from "react";
import { Input, Button, InputNumber, DatePicker, Radio } from "antd";
const fields = [
  {
    component: <Input />,
    name: "name",
    label: "Name",
    layout: {
      span: 24
    },

    validateTrigger: "onSubmit",
    validations: {
      required: true
    }
  },
  {
    component: <Input />,
    name: "email",
    label: "Email",
    layout: {
      span: 24
    },
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
    layout: {
      md: { span: 3, offset: 5 },
      xs: 24
    },
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
    name: "gender",
    layout: {
      md: 8,
      xs: 24
    },
    component: (
      <Radio.Group>
        <Radio value={1}>Male</Radio>
        <Radio value={2}>Female</Radio>
      </Radio.Group>
    )
  },
  {
    component: <DatePicker format={"MM/DD/YYYY"} />,
    layout: {
      md: 8,
      xs: 24
    },
    name: "doj",
    label: "Date of joining",
    validateTrigger: "onSubmit",
    validations: {
      nested: { type: "date" }
    }
  },

  {
    component: <Input />,
    layout: {
      span: 24
    },
    name: "website",
    label: "Website",
    validateTrigger: "onSubmit",
    validations: {
      nested: { type: "url" }
    }
  },
  {
    component: <Input.TextArea />,
    layout: {
      span: 24
    },
    name: "intro",
    label: "Introduction",
    validateTrigger: "onSubmit"
  },
  {
    component: <label>ATSHT</label>,
    layout: {
      span: 12
    },
    name: "captcha_text",
    label: "CAPTCHA"
  },
  {
    component: <Input />,
    layout: {
      span: 12
    },
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
