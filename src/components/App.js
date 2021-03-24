import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './HomePage.js';
import Error from './ErrorPage.js';
import Navigation from './Navigation.js';
import StudentDashboard from './StudentDashboard.js';
import TeacherDashboard from './TeacherDashboard.js';
import './../styles/styles.scss';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/student" component={StudentDashboard}/>
             <Route path="/teacher" component={TeacherDashboard}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
