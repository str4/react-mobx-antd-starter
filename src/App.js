import React from "react";
import "./App.css";
import { Layout, Menu } from "antd";

const App = () => {
  const { Header, Content, Sider, Footer } = Layout;

  return (
    <Layout>
      <Header className="header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}></Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <div style={{ margin: "20px" }}>
            <h2>Page title</h2>
          </div>
          <Content
            className="site-layout-background"
            style={{
              background: "white",
              padding: 24,
              marginLeft: "30px",
              marginRight: "30px",
              minHeight: 780,
            }}
          >
            Content
          </Content>
          <Footer style={{ textAlign: "center" }}>
            React, Mobx, Antd starter 2020
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
