import React,{ useState, useEffect } from 'react';
import { Card } from 'antd';
import {
  ProfileOutlined
} from '@ant-design/icons';
const { Meta } = Card;
const gridStyle = {
  width: '33.3%',
  textAlign: 'center',
};

const IndexCurrentCourse=({name,dicript})=>{
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    },[]);
return (
    <Card bordered={false} loading={loading}>
    <Meta
      avatar={
        <ProfileOutlined />
      }
      title={name}
      description={dicript}
    />
  </Card>
);
}
const IndexCurrentCourses= () => (
    <Card title="已加入课程">
    <Card.Grid bordered={false} style={gridStyle}><IndexCurrentCourse name="编译原理" dicript="A老师 周三下午"/></Card.Grid>
    <Card.Grid bordered={false} style={gridStyle}><IndexCurrentCourse name="软件工程" dicript="B老师 周三下午" /></Card.Grid>
    <Card.Grid bordered={false} style={gridStyle}><IndexCurrentCourse name="嵌入式" dicript="A老师 周三下午" /></Card.Grid>
    <Card.Grid bordered={false} style={gridStyle}><IndexCurrentCourse name="编译原理" dicript="A老师 周三下午" /></Card.Grid>
    <Card.Grid  style={gridStyle}><IndexCurrentCourse name="编译原理" dicript="A老师 周三下午" /></Card.Grid>
  </Card>
);

export default IndexCurrentCourses;