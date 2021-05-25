import {useState} from 'react'
import { Layout,Checkbox,Button,Typography,Form,Input } from 'antd';
import './Login.scss'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const { Footer, Content  } = Layout;
const { Title } = Typography;
function LoginContentHeader() {
    return (
        <div className="login-content-header">
            </div>
    )
}
const NormalLoginForm = () => {
    const [submitting,setSubmitting] = useState(false);
    const onFinish = (values) => {
        setSubmitting(true);
        setTimeout(() => {
            console.log('Received values of form: ', values);
            setSubmitting(false);
        }, 1000);
    };
  
    return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
  
          <div className="login-form-forgot" >
            Forgot password
          </div>
        </Form.Item>
  
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" loading={submitting}>
            Log in
          </Button>
          <Title level={2}>如果未注册会自动注册</Title>
        </Form.Item>
      </Form>
    );
  };
export default function LoginPage(){
    return(
        <>
        <Layout className="login-page-layout">
      {/* <Header /> */}
      <Content className="login-content">
          <LoginContentHeader />
          <NormalLoginForm />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
        </>
    )
}
