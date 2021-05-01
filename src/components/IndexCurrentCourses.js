import React,{ useState, useEffect } from 'react';
import { Card,Avatar } from 'antd';
const { Meta } = Card;
const gridStyle = {
  width: '33.3%',
  textAlign: 'center',
};

const IndexCurrentCourse=()=>{
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    },[]);
return (
    <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
    <Meta
      avatar={
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      }
      title="Card title"
      description="This is the description"
    />
  </Card>
);
}
const IndexCurrentCourses= () => (
    <Card title="已加入课程">
    <Card.Grid style={gridStyle}><IndexCurrentCourse /></Card.Grid>
    <Card.Grid style={gridStyle}><IndexCurrentCourse /></Card.Grid>
    <Card.Grid style={gridStyle}><IndexCurrentCourse /></Card.Grid>
    <Card.Grid style={gridStyle}><IndexCurrentCourse /></Card.Grid>
    <Card.Grid style={gridStyle}><IndexCurrentCourse /></Card.Grid>
  </Card>
);

export default IndexCurrentCourses;