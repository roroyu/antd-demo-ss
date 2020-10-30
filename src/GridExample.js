import React from "react";
import { Grid } from "antd-mobile";
// const { Grid } = window["antd-mobile"];
import "./grid.css";

const data = Array.from(new Array(9)).map((_val, i) => ({
  // icon: "https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",
  icon: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  text: `name${i}`
}));

const data1 = Array.from(new Array(9)).map(() => ({
  icon: "https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png"
}));

const data2 = [
  {
    icon: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    text: "学课程"
  },
  {
    icon: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    text: "读资讯"
  },
  {
    text: "查风险"
  },
  {
    text: "听案例"
  },
  {
    icon: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    text: "用工具"
  },
  {
    text: "交朋友"
  },
  {
    text: "看海外"
  },
  {
    text: "图书馆"
  },
  {
    icon: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    text: "多一个"
  },
  {
    icon: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    text: "新栏目"
  }
];

export default function App() {
  return (
    <div>
      <div className="sub-title">Always square grid item </div>
      <Grid data={data} activeStyle={false} />

      <div className="sub-title">Grid item adjust accroiding to img size </div>
      <Grid data={data} square={false} className="not-square-grid" />

      <div className="sub-title">ColumnNum=3 </div>
      <Grid data={data} columnNum={3} />

      <div className="sub-title">No border</div>
      <Grid data={data} hasLine={false} />

      <div className="sub-title">导航栏</div>
      <Grid data={data2} isCarousel onClick={_el => console.log(_el)} />

      <div className="sub-title">Custom content</div>
      <Grid
        data={data1}
        columnNum={3}
        renderItem={dataItem => (
          <div style={{ padding: "12.5px" }}>
            <img
              src={dataItem.icon}
              style={{ width: "75px", height: "75px" }}
              alt=""
            />
            <div style={{ color: "#888", fontSize: "14px", marginTop: "12px" }}>
              <span>I am title..</span>
            </div>
          </div>
        )}
      />
      <div className="sub-title">Custom GridCell Style</div>
      <Grid
        data={data1}
        columnNum={3}
        itemStyle={{ height: "150px", background: "rgba(0,0,0,.05)" }}
      />
    </div>
  );
}

// export default GridExample;
// ReactDOM.render(<GridExample />, mountNode);
