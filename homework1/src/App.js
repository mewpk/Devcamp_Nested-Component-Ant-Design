import React, { useState } from 'react'
import 'antd/dist/antd.css'
import { Breadcrumb, Layout, Menu,Avatar , Table, Tag ,Button, notification } from 'antd';
import { UserOutlined,SmileOutlined  } from '@ant-design/icons';



const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: (
      <SmileOutlined
        style={{
          color: '#108ee9',
        }}
      />
    ),
  });
};

export default function App() {
  const { Header, Content, Footer } = Layout;


  const data = [
    {
      key: '1',
      name: 'John ',
      lastname : 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer']
      
    },
    {
      key: '2',
      name: 'Jim ',
      lastname : 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    
    },
    {
      key: '3',
      name: 'Joe ',
      lastname : 'Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    
    },
  ];
  const columns = [
    {
      title: 'Avatar',
      key: 'avatar',
      
      render: (x) => (<Avatar
        style={{
          backgroundColor: '#87d068',
        }}
        icon={<UserOutlined />}
      />),
    },
    {
      title: 'Name',
  
      key: 'name',
      render: (x) => (<p>{x.name}</p>),
    },
    {
      title: 'Lastname',
  
      key: 'lastname',
      render: (x) => (<p>{x.lastname}</p>),
    },
    {
      title: 'Age',

      key: 'age',
      render: (x) => (<p>{x.age}</p>),
    },
    {
      title: 'Address',
 
      key: 'address',
      render: (x) => (<p>{x.address}</p>),
    },
    {
      title: 'Tags',
      key: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (x) => (<Button type="primary" onClick={openNotification}>
      Open the notification box
    </Button>),
      // render: 
    },
  ];





  return (
    <Layout>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }))}
        />
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
          marginTop: 64,
         
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 380,
            height : "100vh"
          }}
        >
          <Table columns={columns}  dataSource={data} />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  )
}
