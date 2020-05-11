import React from "react";
import "./App.css";
import { Layout, Menu } from "antd";
import { Router, NavLink } from "react-router-dom";
import makeMainRoutes from "./routes";

import TitleAnnouncer from "./components/TitleAnnouncer";

import history from "./utils/history";

const App = () => {
  const { Header, Content, Sider, Footer } = Layout;

  const routes = makeMainRoutes();

  return (
    <Router history={history}>
      <Layout>
        <Header className="header"></Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <Menu.Item key="home">
                <NavLink to="/">Home</NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/settings">Settings</NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <div style={{ margin: "20px 0 20px 30px" }}>
              <TitleAnnouncer />
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
              {routes}
            </Content>
            <Footer style={{ textAlign: "center" }}>
              React, Mobx, Antd starter 2020
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
