import React from "react";

//css
import "./Main.scss";

// antd design
import { Form, Input, Checkbox, Button } from "antd";

//react icons
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    navigate("/login");
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="main-container">
      <div className="main-box"></div>
      <div className="main-section">
        <div className="main-section-width">
          <div className="main-item">
            <div className="main-card">
              <h1>
                <span>Enjoy</span>
                $300
              </h1>
              <div className="main-text">
                <p>New Chase checking customers</p>
                <div>
                  <p>
                    Open a Chase Total Checking® account with qualifying
                    activities.
                  </p>
                </div>
                <button>Open an account</button>
              </div>
            </div>
            <div className="second-card">
              <div className="second-item">
                <h2>Welcome</h2>
                <Form
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  layout={"vertical"}>
                  <Form.Item
                    className="form-item"
                    label="Email"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}>
                    <Input />
                  </Form.Item>

                  <Form.Item
                    className="form-item"
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}>
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                    name="remember"
                    valuePropName="checked"
                    className="check-box">
                    <Checkbox>Remember me</Checkbox>
                    {/* <div className="check-box-card">
                      Use token <MdKeyboardArrowRight />
                    </div> */}
                  </Form.Item>
                  <Form.Item style={{ marginBottom: "0px" }}>
                    <Button type="primary" htmlType="submit">
                      Sign in
                    </Button>
                  </Form.Item>
                  <div className="form-link">
                    <Link to="/forgot-password">
                      Forgot password? <MdKeyboardArrowRight />
                    </Link>
                    <Link to="sign-up">
                      Not Enrolled? Sign Up Now. <MdKeyboardArrowRight />
                    </Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
