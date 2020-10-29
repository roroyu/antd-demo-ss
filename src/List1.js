import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
// import "./index.css";
import { List, Card } from "antd";

const { Meta } = Card;
const data = [
  {
    title: "学课程"
  },
  {
    title: "读资讯"
  },
  {
    title: "查风险"
  },
  {
    title: "听案例"
  },
  {
    title: "用工具"
  },
  {
    title: "交朋友"
  },
  {
    title: "看海外"
  },
  {
    title: "图书馆"
  }
];

const MyCard = ({ title }) => (
  <Card
    cover={
      <img
        // alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta title={title} />
  </Card>
);

export default function App() {
  return (
    <List
      // style={{ display: "flex", justifyContent: "space-around" }}
      // itemLayout="horizontal"
      grid={{ gutter: 16, column: 4 }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <MyCard title={item.title} />
        </List.Item>
      )}
    />
  );
}

// ReactDOM.render(
//   <List
//     // style={{ display: "flex", justifyContent: "space-around" }}
//     // itemLayout="horizontal"
//     grid={{ gutter: 16, column: 4 }}
//     dataSource={data}
//     renderItem={item => (
//       <List.Item>
//         <MyCard title={item.title} />
//       </List.Item>
//     )}
//   />,
//   document.getElementById("container")
// );
