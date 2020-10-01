import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import NavigationBar from './components/NavigationBar';
import DashboardSA from './components/DashboardSA'
import PushNotification from './components/PushNotification'
import getAllNotification from './components/GetAllNotification';
import AddProject from './components/AddProject';
import AllProjectsTable from './components/AllProjectsTable';
import AllAdminsTable from './components/AllAdminsTable';
import AllUsersTable from './components/AllUsersTable';
import CreateUser from './components/CreateUser';
import CreateAdmin from './components/CreateAdmin';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <div className="App">
        <Route exact path="/" component={LoginForm} />
        <Route path ="/nav" component={NavigationBar} />

        <Route exact path="/nav/AddNotification/Add" component={PushNotification} />
        <Route exact path="/nav/allNotification" component={getAllNotification} />

        <Route path="/nav/SuperAdmin/Dashboard" component={DashboardSA} />

          <Route exact path="/nav/Project/Index" component={AllProjectsTable} />
          <Route exact path="/nav/AllUsers/admin" component={AllAdminsTable} />
          <Route exact path="/nav/AllUsers/Users" component={AllUsersTable} />
          <Route exact path="/nav/Project/Add" component={AddProject} />
          <Route exact path="/nav/Registration/Registration" component={CreateUser} />
          <Route exact path="/nav/SuperAdmin/CreateAdmin" component={CreateAdmin} />

      </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
