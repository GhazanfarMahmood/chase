import React from "react";
import { Input, Form } from "antd";
// css
import "./LogIn.scss";

// logo
import whiteLogo from "../../assets/white-logo.svg";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const LogIn = () => {
  return (
    <div className="LogIn">
      <header>
        <img src={whiteLogo} alt="chase logo" />
      </header>

      <div className="container">
        <span>Get verified</span>
        <h2>We sent you a text message.</h2>
        <p>
          Please tell us your one-time code, along with your sign in password
          and choose &quot; Next.&quot;
        </p>
        <div>
          <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="One-time code"
              layout="vertical"
              rules={[{ required: true }]}
            >
              <Input placeholder="Basic usage" />
            </Form.Item>
            <Form.Item
              label="Password"
              layout="vertical"
              rules={[{ required: true }]}
            >
              <Input.Password placeholder="input password" />
            </Form.Item>
          </Form>
        </div>
        <div>
          Didn&#x2019;t get a code?
          <a href="/">Let&#x2019;s try it again&gt;</a>
        </div>
        <div>
          <button>Cancel</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
