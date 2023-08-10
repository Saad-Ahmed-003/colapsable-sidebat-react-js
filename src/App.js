import React, { useState } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import "./styles.css";

export default function App() {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };
  return (
    <span>
      <Header onClick={handleViewSidebar} />
      <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
    </span>
  );
}
