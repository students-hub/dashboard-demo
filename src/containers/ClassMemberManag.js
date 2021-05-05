import { Layout,Avatar,Statistic, Row, Col,Typography  } from 'antd';
import { AntDesignOutlined,LikeOutlined } from '@ant-design/icons';
const { Header, Footer, Content } = Layout;
const { Title } = Typography;
const UserCard =()=>{
     return  ( 
     <>
     <Avatar
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
        icon={<AntDesignOutlined />} />
        <Row gutter={16}>
    <Col span={12}>
      <Statistic title="学生人数" value={52} prefix={<LikeOutlined />} />
    </Col>
    <Col span={12}>
      <Statistic title="班级课时" value={93}/>
    </Col>
  </Row>
  <Title level={3}>软件工程</Title>
  </>
        )
}
const ClassMemberManagContent  =()=>{
return (
    <div className="content">
        </div>
)
}
const ClassMemberManag=  ()=>{
return (
    <Layout>
      <Header>
          header
      </Header>
      <Content>Content</Content>
      <Footer>footer</Footer>
    </Layout>
)
}
export default ClassMemberManag;