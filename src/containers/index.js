/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Layout, Menu,Card,Calendar,Badge  } from 'antd';
import IndexHeader from "../components/IndexHeader";
import SummeryTree from "../components/SummeryTree";
import IndexCurrentCourses from '../components/IndexCurrentCourses';
const { Header, Content, Footer } = Layout;
//import IndexMenu from './components/Menu';
function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: '软件工程展示' },
        { type: 'warning', content: '编译原理作业' },
      ];
      break;
    default:
  }
  return listData || [];
}
function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}
const App= () => {
return (
  <Layout className="layout" >
  <Header  >
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">个人首页</Menu.Item>
      <Menu.Item key="2">班级</Menu.Item>
      <Menu.Item key="3">网盘</Menu.Item>
    </Menu>
  </Header>
  <IndexHeader />
  <Content style={{ padding: '0 50px', display: 'flex', columnCount: '2', flexFlow: 'row wrap', alignItems: 'flex-start'}}>
  {/* <Card title="学习记录" className="overflow-x-hidden"  extra={<a onClick={toogleAddSummeryTreeVisible}>添加</a>}>
    <SummeryTree style={{overflow:'scroll',maxHeight:'30vh',maxWidth:'33.3vw'}}/>
    <AddSummeryTree visible={addSummeryTreeVisible} triggerVisible={toogleAddSummeryTreeVisible}/>
    </Card>
   <IndexCurrentCourses style={{width:'33Vw'}}/> */}
     <IndexCurrentCourses />
   <section className="body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex flex-wrap w-full">
        <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        <SummeryTree />
        </div>
        <Card className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" title="教学日历">
    <Calendar dateCellRender={dateCellRender}  />
    </Card>
      </div>
    </div>
  </section>
  </Content>
  <Footer style={{ textAlign: 'center' }}>Student Hub 2021</Footer>
</Layout>
);
}
  

export default App;