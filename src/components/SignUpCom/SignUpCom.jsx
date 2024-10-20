import React from "react";

//CSS
import "./SignUpCom.scss";

//Icon
import whiteLogo from "../../assets/white-logo.svg";

//antdesign
import { Form, Input, DatePicker, Select, Button, Checkbox } from "antd";
const { Option } = Select;

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const SignUp = () => {
  return (
    <div className="signUp">
      <header>
        <img src={whiteLogo} alt="chase logo" />
      </header>
      <div className="container">
        <h3>SignUp</h3>
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="wrapper">
            <Form.Item
              label="Full Name"
              name={"fullName"}
              layout="vertical"
              rules={[{ required: true }]}
            >
              <Input placeholder="Your Name" />
            </Form.Item>
            <Form.Item
              label="UserName"
              name={"userName"}
              layout="vertical"
              rules={[{ required: true }]}
            >
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name={"email"}
              layout="vertical"
              rules={[{ required: true }]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              label="Date of Birth"
              name={"DOB"}
              layout="vertical"
              rules={[{ required: true }]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              label="Password"
              name={"password"}
              layout="vertical"
              rules={[{ required: true }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name={"confirmpassword"}
              layout="vertical"
              rules={[{ required: true }]}
            >
              <Input.Password placeholder="Confirm Password" />
            </Form.Item>
            <Form.Item
              label="Residential Address"
              name={"address"}
              layout="vertical"
              rules={[{ required: true }]}
            >
              <Input placeholder="Your Address" />
            </Form.Item>
            <Form.Item
              label="Account Type"
              name={"account"}
              layout="vertical"
              rules={[{ required: true }]}
            >
              <Select placeholder="Select Account">
                <Option value="Savings">Savings</Option>
                <Option value="Checking">Checking</Option>
                <Option value="Business">Business</Option>
              </Select>
            </Form.Item>
          </div>
          <Form.Item>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <div className="btn">
            <Button htmlType="cancel" disabled>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Next
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
