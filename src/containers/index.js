/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react';
import { Layout, Menu,Card,Calendar,Drawer  } from 'antd';
import IndexHeader from "../components/IndexHeader";
import SummeryTree from "../components/SummeryTree";
import IndexCurrentCourses from '../components/IndexCurrentCourses';
const { Header, Content, Footer } = Layout;
//import IndexMenu from './components/Menu';

const AddSummeryTree = ({visible,triggerVisible})=> {
    return (
        <Drawer
          title="Basic Drawer"
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
const App= () => {
const [addSummeryTreeVisible,setaddSummeryTreeVisible] =useState(true);
function toogleAddSummeryTreeVisible() {
  setaddSummeryTreeVisible(!addSummeryTreeVisible)
}
return (
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
  <Card title="学习记录" className="overflow-x-hidden"  extra={<a onClick={toogleAddSummeryTreeVisible}>添加</a>}>
    <SummeryTree style={{overflow:'scroll',maxHeight:'30vh',maxWidth:'33.3vw'}}/>
    <AddSummeryTree visible={addSummeryTreeVisible} triggerVisible={toogleAddSummeryTreeVisible}/>
    </Card>
   <IndexCurrentCourses style={{width:'33.3%'}}/>
  <Card title="教学日历" style={{overflow:'scroll',width:'100%'}}>
    <Calendar  />
    </Card>
    
  </Content>
  <Footer style={{ textAlign: 'center' }}>Student Hub 2021</Footer>
</Layout>
);
}
  

export default App;