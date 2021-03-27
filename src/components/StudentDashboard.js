import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
//import logo from './logo.svg';
import { Provider } from "react-redux";
import SideBar from "./Sidebar/SideBarMenu";
import MainContent from "./Sidebar/MainContent";
import "./../styles/styles.scss";
import { GlobalAppContext } from "./../index.js";
import DashboardList from "./StudentContent/DashboardList";
import configureStore from "../store/configureStore";
import DashboardListFilters from "./StudentContent/DashboardListFilters";
import getVisibleAssignments from "../selectors/assignments";
import { addAssignment } from "../actions/assignments";

const StudentDashboard = () => {
  const store = configureStore();

  store.dispatch(
    addAssignment({
      course: "Algebra",
      type: "Quiz",
      title: "Chapter 9 Quiz",
      dueDate: 1000,
      dueTime: 0,
      pinned: false,
    })
  );
  store.dispatch(
    addAssignment({
      course: "Algebra",
      type: "Homework",
      title: "Chapter 9 Problems",
      dueDate: 1000,
      dueTime: 1000,
      pinned: false,
    })
  );
  store.dispatch(
    addAssignment({
      course: "Geometry",
      type: "Quiz",
      title: "Chapter 14 Quiz",
      dueDate: 1000,
      dueTime: 0,
      pinned: false,
    })
  );
  store.dispatch(
    addAssignment({
      course: "History",
      type: "Notes",
      title: "Revolutionary War Notes",
      dueDate: 0,
      dueTime: 0,
      pinned: false,
    })
  );
  store.dispatch(
    addAssignment({
      course: "History",
      type: "Test",
      title: "Revolutionary War Test",
      dueDate: 2000,
      dueTime: 0,
      pinned: false,
    })
  );
  store.dispatch(
    addAssignment({
      course: "Physics",
      type: "Homework",
      title: "Velocity Problems",
      dueDate: 2000,
      dueTime: 1000,
      pinned: false,
    })
  );

  const state = store.getState();
  const visibleAssignments = getVisibleAssignments(
    state.assignments,
    state.filters
  );

  const [toggled, setToggled] = useState(true);
  const [hasBackground, setHasBackground] = useState(true);

  let style = toggled ? "toggled" : "";
  style += hasBackground ? " sidebar-bg" : "";
  return (
    <Router>
      <GlobalAppContext.Provider
        value={{ toggled, setToggled, hasBackground, setHasBackground }}
      >
        {" "}
        <div className={"page-wrapper default-theme bg1 " + style}>
          <SideBar />
        </div>
        <Provider store={store}>
          <DashboardListFilters />
          <DashboardList />
        </Provider>
      </GlobalAppContext.Provider>
    </Router>
  );
};

export default StudentDashboard;
