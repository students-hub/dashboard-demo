import React, { useState } from 'react';
import { Form, Input, Button, Avatar,AutoComplete,DatePicker,Typography,Switch  } from 'antd';
import { SmileOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import moment from 'moment'
const { RangePicker } = DatePicker;
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const StudentLi = styled.li`
  & {
    margin-bottom: 8px;
  }
  
  .ant-avatar {
    margin-right: 8px;
  }
  
 .ant-avatar {
    margin-right: 0;
    margin-left: 8px;
  }
  `;
const StuentCard =({students})=>{
  return students.length ? (
    <ul>
      {students.map((student, index) => (
        <StudentLi key={index}>
          <Avatar icon={<UserOutlined />} />
          {student.name} - {student.sId}
        </StudentLi>
      ))}
    </ul>
  ) : (
    <Typography.Text className="ant-form-text" type="secondary">
      ( <SmileOutlined /> No user yet. )
    </Typography.Text>
  );
}
const StudentForm = ({students,setStudents}) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    form.resetFields();
    console.log(students);
  };
  const onAdd = ()=>{
    const newSId = form.getFieldValue('studentId');
    setStudents([...students,{name:'小明',sId:newSId}]);
  }
  const onReset = () => {
    form.resetFields();
    setStudents([]);
  };

  return (
    <Form {...layout} form={form} name="studentsInClass" onFinish={onFinish}>
      <Form.Item
        name="studentId"
        label="学生学号"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button htmlType="button" onClick={onAdd}>
          添加
        </Button>
        <Button htmlType="button" onClick={onReset}>
          重置
        </Button>
      </Form.Item>
    </Form>
  );
};
const SelectCourseDayAndWeekForm = ({formName,setWeeks})=>{
const handleWeekRangeChange = (weekMomentObj)=>{
  setWeeks(weekMomentObj);
}
  return(
  <Form.Item
          label="课程周期"
          name={formName}
          rules={[
            {
              required: true,
              message: '请提供授课时间段',
            },
          ]}
        >
          <RangePicker 
            ranges={{
              Today: [moment(), moment()],
              'This Month': [moment().startOf('month'), moment().endOf('month')],
            }}
            onChange={handleWeekRangeChange}
          picker="week" />
        </Form.Item>
  )
}
const AddClassForm =()=>{
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  const onSearch = (searchText) => {
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
  };

  const onSelect = (data) => {
    console.log('onSelect', data);
  };

  const onChange = (data) => {
    setValue(data);
  };
 const [students,setStudents] = useState([{'name':'李昊洋','sId':2018302060083}]);
 const [showExtraForm,setShowExtraForm]= useState(false);
 // eslint-disable-next-line
 const [extraWeek,setExtraWeeks] = useState(moment());//default-current date
    const handleExtraDisplayChange = (newExtraState)=>{
      setShowExtraForm(newExtraState);
    }
    const handleFinish =(value)=>{
      console.log(value);
    }
    const mockVal = (str, repeat = 1) => ({
      value: str.repeat(repeat),
    });
    return (
        <Form
        
        {...layout}
        name="basic"
        onFinish={handleFinish}
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          label="课程名称"
          name="className"
          rules={[
            {
              required: true,
              message: '请输入课程名称',
            },
          ]}
        >
 <AutoComplete
        value={value}
        options={options}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder="control mode"
      />
        </Form.Item>
  
        <Form.Item
          label="课头号"
          name="classId"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="课程周期"
          name="courseWeeks"
          rules={[
            {
              required: true,
              message: '请提供授课时间',
            },
          ]}
        >
          <RangePicker 
            ranges={{
              Today: [moment(), moment()],
              'This Month': [moment().startOf('month'), moment().endOf('month')],
            }}
          picker="week" />
        </Form.Item>
   <StudentForm students={students} setStudents={setStudents}></StudentForm>
          <StuentCard students={students}>
          </StuentCard>
          <Form.Item name="courseHaveExtra">
          <Switch checkedChildren="开启" unCheckedChildren="关闭" onChange={handleExtraDisplayChange} />
          </Form.Item>
{showExtraForm&&<SelectCourseDayAndWeekForm  formName="extraWeek" setWeeks={setExtraWeeks}/>}
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            注册班级
          </Button>
        </Form.Item>
      </Form>
    )
}
const AddClassContainer = styled.div`
&{
  max-width:300px;
  float:left;
}
`
const AddClass = ()=>{
    return (
      <AddClassContainer>
        <AddClassForm></AddClassForm>
        </AddClassContainer>
    )
}

export default AddClass;