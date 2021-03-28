import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import SideBar from "../Sidebar/SideBarMenu";
import "../../styles/styles.scss";
import { GlobalAppContext } from "../../index.js";
import DashboardList from "./DashboardList";
import configureStore from "../../store/configureStore";
import DashboardListFilters from "./DashboardListFilters";
import { addAssignment } from "../../actions/assignments";
import moment from "moment";

const StudentDashboard = () => {
  const store = configureStore();

  moment.locale("en", {
    calendar: {
      lastDay: "[Yesterday]",
      sameDay: "[Today]",
      nextDay: "[Tomorrow]",
      lastWeek: "[last] dddd",
      nextWeek: "dddd",
      sameElse: "L",
    },
  });

  store.dispatch(
    addAssignment({
      course: "Algebra",
      type: "Quiz",
      title: "Chapter 9 Quiz",
      dueDate: moment(),
      dueTime: moment().startOf("day").add(10, "hour"),
      pinned: false,
    })
  );
  store.dispatch(
    addAssignment({
      course: "Algebra",
      type: "Homework",
      title: "Chapter 9 Problems",
      dueDate: moment().add(1, "days"),
      dueTime: moment().startOf("day").add(8, "hour"),
      pinned: false,
    })
  );
  store.dispatch(
    addAssignment({
      course: "Geometry",
      type: "Quiz",
      title: "Chapter 14 Quiz",
      dueDate: moment().add(1, "days"),
      dueTime: moment().startOf("day").subtract(1, "minute"),
      pinned: false,
    })
  );
  store.dispatch(
    addAssignment({
      course: "History",
      type: "Notes",
      title: "Revolutionary War Notes",
      dueDate: moment().add(3, "days"),
      dueTime: moment().startOf("day").subtract(1, "minute"),
      pinned: false,
    })
  );
  store.dispatch(
    addAssignment({
      course: "History",
      type: "Test",
      title: "Revolutionary War Test",
      dueDate: moment().add(5, "days"),
      dueTime: moment().startOf("day").subtract(1, "minute"),
      pinned: false,
    })
  );
  store.dispatch(
    addAssignment({
      course: "Physics",
      type: "Homework",
      title: "Velocity Problems",
      dueDate: moment().add(8, "days"),
      dueTime: moment().startOf("day"),
      pinned: false,
    })
  );
  store.dispatch(
    addAssignment({
      course: "Physics",
      type: "Test",
      title: "Velocity Test",
      dueDate: moment().add(12, "days"),
      dueTime: moment().startOf("day").add(12, "hour"),
      pinned: false,
    })
  );
  store.dispatch(
    addAssignment({
      course: "Geometry",
      type: "Homework",
      title: "Triangle Homework",
      dueDate: moment().add(12, "days"),
      dueTime: moment().startOf("day").add(12, "hour"),
      pinned: false,
    })
  );
  store.dispatch(
    addAssignment({
      course: "Algebra",
      type: "Homework",
      title: "Exponentials Problems",
      dueDate: moment().add(13, "days"),
      dueTime: moment().startOf("day").add(8, "hour"),
      pinned: false,
    })
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
          <div className="content-container">
            <DashboardListFilters />
            <DashboardList />
          </div>
        </Provider>
      </GlobalAppContext.Provider>
    </Router>
  );
};

export default StudentDashboard;
