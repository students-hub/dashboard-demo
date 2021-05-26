import { PageHeader, Tabs, Button, Statistic, Descriptions } from 'antd';

const { TabPane } = Tabs;

const renderContent = (column = 2) => (
  <Descriptions size="small" column={column}>
    <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
    <Descriptions.Item label="Association">
      <span>421421</span>
    </Descriptions.Item>
    <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
    <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
    <Descriptions.Item label="Remarks">
      Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
  </Descriptions>
);

const extraContent = (
  <div
    style={{
      display: 'flex',
      width: 'max-content',
      justifyContent: 'flex-end',
    }}
  >
    <Statistic
      title="班级人数"
      value="53"
      style={{
        marginRight: 32,
      }}
    />
  </div>
);

const Content = ({ children, extra }) => (
  <div className="content">
    <div className="main">{children}</div>
    <div className="extra">{extra}</div>
  </div>
);
const ClassHeader = (props)=>{
  return (
    <>
    <PageHeader
      className="site-page-header-responsive"
      onBack={() => window.history.back()}
      title="软件工程"
      subTitle="2020学年下学期"
      extra={[
        <Button key="3">收藏</Button>,
        <Button key="1" type="primary">
          网盘
        </Button>
      ]}
      footer={
        <Tabs defaultActiveKey="1">
  <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
        </Tabs>
      }
    >
      <Content extra={extraContent}>{renderContent()}</Content>
    </PageHeader>
  </>
  )
}
export default ClassHeader;