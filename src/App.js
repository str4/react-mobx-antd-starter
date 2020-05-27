import React from "react";
import { Layout } from "antd";
import { Router } from "react-router-dom";
import makeMainRoutes from "./routes";

import MainSider from "./components/MainSider";
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import TitleAnnouncer from "./components/TitleAnnouncer";

import history from "./utils/history";

const App = () => {
  const { Content, Footer } = Layout;

  const routes = makeMainRoutes();

  return (
    <Router history={history}>
      <Layout className="mainlayout">
        <MainSider />
        <Layout>
          <MainHeader />
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
            <MainFooter />
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
