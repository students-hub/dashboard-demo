import { PageHeader, Tabs, Button, Statistic, Descriptions,Card  } from 'antd';

const { TabPane } = Tabs;

const renderContent = (column = 2) => (
  <Descriptions size="small" column={column}>
    <Descriptions.Item label="学分">2.5</Descriptions.Item>
    <Descriptions.Item label="地点">
      <span>3区1-321</span>
    </Descriptions.Item>
    <Descriptions.Item label="授课时间">周二下午</Descriptions.Item>
    <Descriptions.Item label="授课老师">何璐璐</Descriptions.Item>
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
      <Statistic
      title="距离下次授课还有"
      value="1"
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
  <TabPane tab="最近作业安排" key="1">
      读后感
    </TabPane>
    <TabPane tab="班级公告" key="2">
      期末：闭卷考试
    </TabPane>
    <TabPane tab="最近分享文件" key="3">
    <Card title="期末复习资料.pdf" extra={<a href="./">打开</a>} style={{ width: 300 }}>
    
      <p>期末复习用</p>
    </Card>
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