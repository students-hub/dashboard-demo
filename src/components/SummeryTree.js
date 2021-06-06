import React,{useState} from 'react';
import { Timeline,Popover,Typography,Divider,Tag,Drawer,Card,Form, Input, Button, Checkbox  } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
const { Title } = Typography;
const { TextArea } = Input;
const content = (
  <div>
    <Title level={4}>主要内容</Title>
    <div>
    <Tag icon={<ClockCircleOutlined />} color="default">
        2021/5/25
      </Tag>
    </div>
    <Divider orientation="left" plain>
      备注
    </Divider>
    <p>详细内容</p>
  </div>
);
let AddForm=()=>{
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };  
  return (
    <Form
    {...layout}
    name="basic"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >
    <Form.Item
      label="时间"
      name="time"
      rules={[{ required: true, message: '记录时间是必要的' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="标题"
      name="title"
      rules={[{ required: true, message: '一个好的标题有助于你回看' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="memo"
      name="memo"
      rules={[{ required: true, message: '详细记录' }]}
    >
       <TextArea
          placeholder="Autosize height with minimum and maximum number of lines"
          autoSize={{ minRows: 2, maxRows: 6 }}
        />
    </Form.Item>

    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
      <Checkbox>标记为重要</Checkbox>
    </Form.Item>

    <Form.Item {...tailLayout}>
      <Button type="primary" htmlType="submit">
        记录
      </Button>
    </Form.Item>
  </Form>
  )
}
 let SummeryTree = ({data})=>{
     return (
  <Timeline mode="alternate" style={{"min-height":"200px"}}>
    <Popover content={content} title="授课信息">
    <Timeline.Item color="green">复习嵌入式 2021-06-05</Timeline.Item>
    </Popover>
    <Popover content={content} title="Title">
    <Timeline.Item color="green">Solve initial network problems 2021-06-05</Timeline.Item>
    </Popover>
    <Timeline.Item color="green">编译原理实验 2021-06-04</Timeline.Item>
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
           <AddForm />
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