import React from 'react';
import { Layout, Menu,Card,Calendar  } from 'antd';
import IndexHeader from "../components/IndexHeader";
import SummeryTree from "../components/SummeryTree";
import IndexCurrentCourses from '../components/IndexCurrentCourses';
const { Header, Content, Footer } = Layout;
//import IndexMenu from './components/Menu';

const App= () => (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <IndexHeader />
    <Content style={{ padding: '0 50px',display:'flex',columnCount:'2',flexFlow:'row wrap',alignItems:'flex-start'}}>
    <Card title="学习记录"  extra={<a>添加</a>}>
      <SummeryTree style={{overflow:'scroll',maxHeight:'30vh',maxWidth:'33.3vw'}}/>
      </Card>
     <IndexCurrentCourses style={{width:'33.3%'}}/>
    <Card title="教学日历" style={{overflow:'scroll',width:'100%'}}>
      <Calendar  />
      </Card>
      
    </Content>
    <Footer style={{ textAlign: 'center' }}>Student Hub 2021</Footer>
  </Layout>
);

export default App;