import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";

const MainSider = (props) => {
  const { location } = props;
  const { Sider } = Layout;
  return (
    <Sider width={200} className="site-layout-background mainsider">
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
      >
        <Menu.Item key="/">
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item key="/settings">
          <NavLink to="/settings">Settings</NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default withRouter(MainSider);
