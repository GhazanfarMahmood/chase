import React from "react";

//CSS
import "./PayAndTransfer.scss";

// REACT ICONS
import { TbCoinFilled } from "react-icons/tb";
import { BsBank2 } from "react-icons/bs";
import { GoQuestion } from "react-icons/go";

// ant design select
import { Select } from "antd";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const PayAndTransfer = () => {
  return (
    <section className="payAndTransfer">
      <div className="container">
        <div className="head">
          <h2>Payment Options</h2>
        </div>
        <div className="wrapper">
          <div className="content">
            <TbCoinFilled />
            <h3>Zelle®</h3>
            <p>Pay people & small business</p>
            <div>
              <span>Delivery time</span>In-moments
            </div>
            <div>
              <span>Standard fee</span>No additional fees
            </div>
            <div>
              <span>Daily time</span>Varies
            </div>
            <div>
              <a href="/">Send money</a>
              <a href="/">Request & split</a>
            </div>
          </div>
          <div className="content">
            <BsBank2 />
            <h3>Wires & global transfers</h3>
            <p>Send money almost anywhere</p>
            <div>
              <span>Delivery time</span>1 to 5 business days
            </div>
            <div>
              <span>Standard fee</span>$0 to $40
            </div>
            <div>
              <span>Daily time</span>$50,000.00
            </div>
            <div>
              <a href="/">Schedule wire</a>
              <a href="/">Add recipient</a>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="tableContent">
            <div>
              <h4>
                Track your payments <GoQuestion />
              </h4>
              <p>Review your recent activity for +/- 7 days</p>
            </div>
            <div>
              Status
              <Select
                onChange={handleChange}
                defaultValue="All"
                style={{
                  width: 120,
                }}
                allowClear
                options={[
                  {
                    value: "All",
                    label: "All",
                  },
                  {
                    value: "New",
                    label: "New",
                  },
                  {
                    value: "Nothing",
                    label: "Nothing",
                  },
                ]}
                placeholder="select it"
              />
            </div>
          </div>
          <table>
            <tr>
              <th>Recipient</th>
              <th>Send on</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>
                Jmh (..Chk(...2020)) <div>Zelle®</div>
              </td>
              <td>Oct 27, 2024</td>
              <td>Completed</td>
              <td>
                $411.00 <a href="/">See details</a>
              </td>
            </tr>
            <tr>
              <td>
                Jmh (..Chk(...2020)) <div>Zelle®</div>
              </td>
              <td>Oct 27, 2024</td>
              <td>Completed</td>
              <td>
                $1,239.43 <a href="/">See details</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PayAndTransfer;
