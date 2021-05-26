import React,{useState} from 'react';
import { Timeline,Popover,Typography,Divider,Tag,Drawer,Card } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
const { Title } = Typography;
const content = (
  <div>
    <Title level={4}>主要内容</Title>
    <div>
    <Tag icon={<ClockCircleOutlined />} color="default">
        2021、5、25
      </Tag>
    </div>
    <Divider orientation="left" plain>
      备注
    </Divider>
    <p>详细内容</p>
  </div>
);
 let SummeryTree = ({data})=>{
     return (
  <Timeline mode="alternate">
    <Popover content={content} title="授课信息">
    <Timeline.Item>
      sssss
    </Timeline.Item>
    </Popover>
    <Popover content={content} title="Title">
    <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
    </Popover>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
      beatae vitae dicta sunt explicabo.
    </Timeline.Item>
    <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
      Technical testing 2015-09-01
    </Timeline.Item>
  </Timeline>);
     }
     const AddSummeryTree = ({visible,triggerVisible})=> {
      return (
          <Drawer
            title="添加记录"
            placement="right"
            closable={false}
            onClose={triggerVisible}
            visible={visible}
            getContainer={false}
            style={{ position: 'absolute' }}
          >
            <p>Some contents...</p>
          </Drawer>
      );
  }
     let CombinedSummeryTree = ()=>{
      const [addSummeryTreeVisible,setaddSummeryTreeVisible] =useState(true);
      function toogleAddSummeryTreeVisible() {
        setaddSummeryTreeVisible(!addSummeryTreeVisible)
      }
        return (
          <Card title="学习记录" className="overflow-x-hidden"  extra={<span onClick={toogleAddSummeryTreeVisible}>添加</span>}>
          <SummeryTree />
          <AddSummeryTree visible={addSummeryTreeVisible} triggerVisible={toogleAddSummeryTreeVisible}/>
          </Card>
        )
      }
export default CombinedSummeryTree;