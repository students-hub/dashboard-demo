/* eslint-disable jsx-a11y/anchor-is-valid */
import { PageHeader, Menu, Dropdown, Button, Tag,  Row,Descriptions } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import './IndexHeader.scss';
const HeaderMenu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const DropdownMenu = () => (
  <Dropdown key="more" overlay={HeaderMenu}>
    <Button
      style={{
        border: 'none',
        padding: 0,
      }}
    >
      <EllipsisOutlined
        style={{
          fontSize: 20,
          verticalAlign: 'top',
        }}
      />
    </Button>
  </Dropdown>
);

const routes = [
  {
    path: '/',
    breadcrumbName: '工作台',
  }
];

const content = (
  <>
     <Descriptions size="small" column={2}>
    <Descriptions.Item label="学号">
      <a>2018302060083</a>
    </Descriptions.Item>
    <Descriptions.Item label="剩余课程">2</Descriptions.Item>
    <Descriptions.Item label="宿舍">
      信息学部13舍 201宿舍
    </Descriptions.Item>
  </Descriptions>
  </>
);

const Content = ({ children, extraContent }) => (
  <Row>
    <div style={{ flex: 1 }}>{children}</div>
    <div className="image">{extraContent}</div>
  </Row>
);

const IndexHeader= () => (
  <PageHeader
    title="李小明"
    className="site-page-header"
    subTitle="看看至今以来的收获吧"
    tags={<Tag color="blue">学生</Tag>}
    extra={[
      <Button key="1" type="primary">
        信箱
      </Button>,
      <DropdownMenu key="more" />,
    ]}
    avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
    breadcrumb={{ routes }}
  >
    <Content
      extraContent={
        <img
          src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
          alt="content"
          width="100%"
        />
      }
    >
      {content}
    </Content>
  </PageHeader>
);

export default IndexHeader;