import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
//import logo from './logo.svg';
import SideBar from "./Sidebar/SideBarMenu";
import MainContent from "./Sidebar/MainContent";
import "./../styles/styles.scss";
import { GlobalAppContext } from "./../index.js";

const StudentDashboard = () => {
  const [toggled, setToggled] = useState(true);
  const [hasBackground, setHasBackground] = useState(true);

  let style = toggled ? "toggled" : "";
  style += hasBackground ? " sidebar-bg" : "";
  return (
    <Router>
      <GlobalAppContext.Provider
        value={{ toggled, setToggled, hasBackground, setHasBackground }}
      >
        <div className={"page-wrapper default-theme bg1 " + style}>
          <SideBar />
          <MainContent />
        </div>
      </GlobalAppContext.Provider>
    </Router>
  );
};

export default StudentDashboard;
