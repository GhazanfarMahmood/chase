import React from "react";

import "./ScheduleTransfer.scss";

//antdesign
import { Form, Input, DatePicker, Select, Button } from "antd";
const { Option } = Select;

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const ScheduleTransfer = () => {
  return (
    <div className="scheduleTransfer">
      <div className="container">
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="wrapper">
            <Form.Item
              label="Transfer from"
              name={"transferFrom"}
              layout="vertical"
              rules={[{ required: true }]}
            >
              <Select placeholder="Chk (...696g): $7,732.70">
                <Option value="Savings">Chk (...696g): $7,732.70</Option>
                <Option value="Checking">Chk (...696g): $7,732.70</Option>
                <Option value="Business">Chk (...696g): $7,732.70</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Transfer to"
              name={"transferTo"}
              layout="vertical"
              rules={[{ required: true }]}
            >
              <Select placeholder="External Transfer (....8802)">
                <Option value="Savings">External Transfer (....8802)</Option>
                <Option value="Checking">External Transfer (....8802)</Option>
                <Option value="Business">External Transfer (....8802)</Option>
              </Select>
              <span className="detail">INDIVIDUAL</span>
            </Form.Item>
            <Form.Item
              label="Amount"
              name={"amount"}
              layout="vertical"
              rules={[{ required: true }]}
            >
              <Input placeholder="$ 2,700.00" />
            </Form.Item>
            <Form.Item
              label="Send on"
              name={"sendTime"}
              layout="vertical"
              rules={[{ required: true }]}
            >
              <DatePicker />
              <span className="detail">CutOff time: 4:30 PM ET</span>
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name={"number"}
              layout="vertical"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter your number" />
            </Form.Item>
          </div>
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

export default ScheduleTransfer;
