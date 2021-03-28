import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Error from "./ErrorPage.js";
import HomePage from "./HomePage.js";
import StudentDashboard from "./StudentContent/StudentDashboard.js";
import TeacherDashboard from "./TeacherDashboard.js";
import "./../styles/styles.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/student" component={StudentDashboard} />
            <Route path="/teacher" component={TeacherDashboard} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
