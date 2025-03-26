import { Sidenav, Nav, Toggle } from "rsuite";
import React from "react";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import logo from "../assets/nn.png"; // Adjust according to your directory structure

const Sidebar = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState("1");

  return (
    <div style={{ 
        width: expanded ? 220 : 67, 
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        background: "#f8f9fa",
        padding: "10px",
        transition: "width 0.3s ease-in-out",
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
        display: "flex", // Enables flexbox
        flexDirection: "column", // Stack elements vertically
        alignItems: "center", // Centers content horizontally
        overflowY: "auto" // Enables vertical scrolling
      }}>
      
      {/* Toggle Button */}

      <img 
  src={logo} 
  alt="Better Bracket" 
  width={expanded ? 120 : 40} 
  height="auto" 
  style={{ 
    display: "block", 
    margin: "-6px auto", // Centers the logo
    transition: "width 0.3s ease-in-out" // Smooth transition when expanding/collapsing
  }} 
/>

      <Toggle
        onChange={setExpanded}
        checked={expanded}
        
        style={{ marginBottom: 10 }}
      />

      {/* Sidebar Navigation */}
      <Sidenav expanded={expanded} defaultOpenKeys={["3", "4"]}>
        <Nav activeKey={activeKey} onSelect={setActiveKey}>
          <Nav.Item eventKey="1" icon={<DashboardIcon />}>
            Dashboard
          </Nav.Item>
          <Nav.Item eventKey="2" icon={<GroupIcon />}>
            User Group
          </Nav.Item>
          <Nav.Menu eventKey="3" title="Advanced" icon={<MagicIcon />}>
            <Nav.Item eventKey="3-1">Geo</Nav.Item>
          </Nav.Menu>
          <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon />}>
            <Nav.Item eventKey="4-1">Applications</Nav.Item>
            <Nav.Item eventKey="4-2">Channels</Nav.Item>
            <Nav.Item eventKey="4-3">Versions</Nav.Item>
            <Nav.Menu eventKey="4-5" title="Custom Action">
              <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
              <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
            </Nav.Menu>
          </Nav.Menu>
        </Nav>
      </Sidenav>
    </div>
  );
};

export default Sidebar;
