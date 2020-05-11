import React from "react";
import "./App.css";
import { Layout } from "antd";
import { Router  } from "react-router-dom";
import makeMainRoutes from "./routes";

import MainSider from "./components/MainSider";
import TitleAnnouncer from "./components/TitleAnnouncer";

import history from "./utils/history";

const App = () => {
  const { Header, Content, Footer } = Layout;

  const routes = makeMainRoutes();

  return (
    <Router history={history}>
      <Layout>
        <Header className="header"></Header>
        <Layout>
          <MainSider />
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
