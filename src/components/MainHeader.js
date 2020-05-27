import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

const MainHeader = () => {
  return (
    <Header className="header">
      <div className="logo">
        <h3 className="logotext">Title</h3>
      </div>
    </Header>
  );
};

export default MainHeader;
