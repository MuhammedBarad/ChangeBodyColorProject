import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import  "../index.css";
const AppSidebar = ({ changeSidebarColor }) => {
  const { Sider } = Layout;
  return (
    <div>
      <Sider
        className="mt-1"
        trigger={null}
        style={{ height: "91vh", background: changeSidebarColor }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          className="fs-6"
          theme="dark"
          mode="inline"
          style={{ background: changeSidebarColor }}
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
          ]}
        />
      </Sider>
    </div>
  );
};
export default AppSidebar;
