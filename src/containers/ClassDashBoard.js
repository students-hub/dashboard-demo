/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Layout, Menu,Card,Calendar  } from 'antd';
import IndexHeader from "../components/IndexHeader";
import SummeryTree from "../components/SummeryTree";
import IndexCurrentCourses from '../components/IndexCurrentCourses';
const { Header, Content, Footer } = Layout;
//import IndexMenu from './components/Menu';

const App= () => {
return (
  <Layout className="layout" >
  <Header  >
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1">nav 1</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item key="3">nav 3</Menu.Item>
    </Menu>
  </Header>
  <IndexHeader />
  <Content style={{ padding: '0 50px', display: 'flex', columnCount: '2', flexFlow: 'row wrap', alignItems: 'flex-start'}}>
  {/* <Card title="学习记录" className="overflow-x-hidden"  extra={<a onClick={toogleAddSummeryTreeVisible}>添加</a>}>
    <SummeryTree style={{overflow:'scroll',maxHeight:'30vh',maxWidth:'33.3vw'}}/>
    <AddSummeryTree visible={addSummeryTreeVisible} triggerVisible={toogleAddSummeryTreeVisible}/>
    </Card>
   <IndexCurrentCourses style={{width:'33Vw'}}/> */}
   <section className="body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex flex-wrap w-full">
        <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        <SummeryTree />
        </div>
        <Card className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" title="教学日历">
    <Calendar  />
    </Card>
      </div>
    </div>
  </section>
  <IndexCurrentCourses />
  </Content>
  <Footer style={{ textAlign: 'center' }}>Student Hub 2021</Footer>
</Layout>
);
}
  

export default App;