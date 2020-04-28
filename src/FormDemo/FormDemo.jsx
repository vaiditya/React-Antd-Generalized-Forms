import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Form, Input, Checkbox, Button } from "antd";
import { fields } from "./data";
const config = (value, dependencyValue, condition) => {
  if (condition === "sha") return value.includes("a");
  if (condition === "eq") return value === dependencyValue;
  else return true;
};
const typeTemplate = "${label} is not a valid ${type}";

const defaultValidateMessages = {
  default: "Validation error on field ${label}",
  required: "${label} is required",
  enum: "${label} must be one of [${enum}]",
  whitespace: "${label} cannot be empty",
  date: {
    format: "${label} is invalid for format date",
    parse: "${label} could not be parsed as date",
    invalid: "${label} is invalid date"
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate
  },
  string: {
    len: "${label} must be exactly ${len} characters",
    min: "${label} must be at least ${min} characters",
    max: "${label} cannot be longer than ${max} characters",
    range: "${label} must be between ${min} and ${max} characters"
  },
  number: {
    len: "${label} must equal ${len}",
    min: "${label} cannot be less than ${min}",
    max: "${label} cannot be greater than ${max}",
    range: "${label} must be between ${min} and ${max}"
  },
  array: {
    len: "${label} must be exactly ${len} in length",
    min: "${label} cannot be less than ${min} in length",
    max: "${label} cannot be greater than ${max} in length",
    range: "${label} must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "${label} does not match pattern ${pattern}"
  }
};
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

function FormDemoComponent() {
  const [form] = Form.useForm();

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log("Success:", values);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  return (
    <div className="container">
      <Form
        {...layout}
        form={form}
        // onFinish={onFinish}
        validateMessages={defaultValidateMessages}
      >
        {fields.map(data => (
          <Form.Item
            {...data}
            rules={Object.keys(data.validations).map(rule => {
              if (rule !== "custom")
                return {
                  [rule]: data.validations[rule]
                };
              else {
                return ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (
                      !value ||
                      config(
                        value,
                        getFieldValue(data.validations.custom.dependency),
                        data.validations.custom.condition
                      )
                    ) {
                      return Promise.resolve();
                    }
                    return Promise.reject(data.validations.custom.message);
                  }
                });
              }
            })}
          >
            {data.component}
          </Form.Item>
        ))}

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="button" onClick={onCheck}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormDemoComponent;
