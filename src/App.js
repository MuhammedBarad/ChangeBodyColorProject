import { Layout } from "antd";
import AppContent from "./components/AppContent";
import AppSidebar from "./components/AppSidebar";
import AppNavbar from "./components/AppNavbar";
import { useState } from "react";

const App = () => {
  const [sidebarColor, setSidebarColor] = useState("");
  const changeSidebarColor = (color) => setSidebarColor(color);
  const [NavbarColor, setNavbarColor] = useState("");
  const changeNavbarColor = (color) => setNavbarColor(color);
  
  return (
    <div>
      <AppNavbar changeNavbarColor={NavbarColor} />
      <Layout>
        <AppSidebar changeSidebarColor={sidebarColor} />
        <Layout>
          <AppContent
            changeSidebarColor={changeSidebarColor}
            changeNavbarColor={changeNavbarColor}
          />
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
