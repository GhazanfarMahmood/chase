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
            <Form.Item
              label="Social Security"
              name={"security"}
              layout="vertical"
              rules={[{ required: true }]}
            >
              <Input placeholder="Social Security" />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name={"number"}
              layout="vertical"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter your number" />
            </Form.Item>
            <Form.Item
              label="Address"
              name={"address"}
              layout="vertical"
              rules={[{ required: true }]}
            >
              <Input placeholder="Your Address" />
            </Form.Item>
            <Form.Item
              label="Address 2"
              name={"address_2"}
              layout="vertical"
              rules={[{ required: true }]}
            >
              <Input placeholder="Your Address" />
            </Form.Item>
            <Form.Item
              label="City (Optional)"
              name={"city"}
              layout="vertical"
              rules={[{ required: true }]}
            >
              <Input placeholder="Your City" />
            </Form.Item>
            <Form.Item
              label="State (Optional)"
              name={"state"}
              layout="vertical"
              rules={[{ required: true }]}
            >
              <Input placeholder="Your State" />
            </Form.Item>
            <Form.Item
              label="ZipCode (Optional)"
              name={"zipcode"}
              layout="vertical"
              rules={[{ required: true }]}
            >
              <Input placeholder="ZipCode" />
            </Form.Item>
          </div>
          <Form.Item>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <div className="btn">
            <Button htmlType="cancel">Cancel</Button>
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
