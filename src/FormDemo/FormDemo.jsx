import React from "react";
import "./styles.scss";
import { Form, Col, Row } from "antd";
import { customValidationRules, defaultValidateMessages } from "./config";

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 }
};

function FormComponent(props) {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log("Success", values);
    props.onSubmit(values);
  };
  const onFinishFail = values => {
    console.log("Failed", values);
  };

  return (
    <div className="container">
      <Form
        {...layout}
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFail}
        validateMessages={defaultValidateMessages}
        onValuesChange={e => props.onChange(e)}
        initialValues={{ captcha_text: "ATSHT" }}
      >
        <Row>
          {props.fields.map(data => (
            <Col {...data.layout}>
              <Form.Item
                {...data}
                rules={
                  data.validations &&
                  Object.keys(data.validations).map(rule => {
                    if (rule !== "custom" && rule !== "nested")
                      return {
                        [rule]: data.validations[rule]
                      };
                    else if (rule === "nested")
                      return {
                        ...data.validations.nested
                      };
                    else {
                      return ({ getFieldValue }) => ({
                        validator(rule, value) {
                          if (
                            !value ||
                            customValidationRules(
                              value,
                              getFieldValue(data.validations.custom.dependency),
                              data.validations.custom.condition
                            )
                          ) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            data.validations.custom.message
                          );
                        }
                      });
                    }
                  })
                }
              >
                {data.component}
              </Form.Item>
            </Col>
          ))}
        </Row>
      </Form>
    </div>
  );
}

export default FormComponent;
