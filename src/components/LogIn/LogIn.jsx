import React from "react";
import { Input, Form, Button } from "antd";
// css
import "./LogIn.scss";

// logo
import whiteLogo from "../../assets/white-logo.svg";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
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
          Didn't get a code?
          <Link to="/">Let&#x2019;s try it again&gt;</Link>
        </div>
        <div>
          <Button onClick={() => navigate("/")}>Cancel</Button>
          <Button onClick={() => navigate("/dashboard")}>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
