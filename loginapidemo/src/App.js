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
        <Route path="/" component={NavigationBar} />
        <Route exact path="/AddNotification/Add" component={PushNotification} />
        <Route exact path="/allNotification" component={getAllNotification} />
        <Route exact path="/SuperAdmin/Dashboard" component={DashboardSA} />
        <Route exact path="/Project/Index" component={AllProjectsTable} />
        <Route exact path="/AllUsers/admin" component={AllAdminsTable} />
        <Route exact path="/AllUsers/Users" component={AllUsersTable} />
        <Route exact path="/Project/Add" component={AddProject} />
        <Route exact path="/Registration/Registration" component={CreateUser} />
        <Route exact path="/SuperAdmin/CreateAdmin" component={CreateAdmin} />

      </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
