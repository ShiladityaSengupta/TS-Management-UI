import React, { Component } from 'react';
import './PushNotification.css'
import axios from 'axios';

class PushNotification extends Component{
    render(){
        return(
            <div>
            <div id="wrapper">
        {/* <!-- Navigation --> */}
        <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{"margin-bottom": 0}}>
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">TIME MANAGER</a>
            </div>
            {/* <!-- /.navbar-header --> */}
            <ul className="nav navbar-top-links navbar-right">
                <li className="dropdown">
                    Hi  SuperAdmin !
                </li>
                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                        <li>
                            <a href="/Login/Logout"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>
                    {/* <!-- /.dropdown-user --> */}
                </li>
                {/* <!-- /.dropdown --> */}
            </ul>
            {/* <!-- /.navbar-top-links --> */}
            <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" id="side-menu">
                        <li>
                            <a href="/SuperAdmin/Dashboard"><i className="fa fa-dashboard fa-fw"></i> Dashboard</a>
                        </li>
                        <li>
                            <a href="/Registration/Registration"><i className="fa fa-edit fa-fw"></i> Create User</a>
                        </li>
                        <li>
                            <a href="/SuperAdmin/CreateAdmin"><i className="fa fa-edit fa-fw"></i> Create Admin</a>
                        </li>
                        <li>
                            <a href="/SuperAdmin/AssignRoles"><i className="fa fa-edit fa-fw"></i>AssignRoles</a>
                        </li>
                        <li>
                            <a href="/AllRoles/Roles"><i className="fa fa-table fa-fw"></i> All Roles</a>
                        </li>
                        <li>
                            <a href="/Project/Add"><i className="fa fa-edit fa-fw"></i> Add Project</a>
                        </li>
                        <li>
                            <a href="/ResetPassword/Index"><i className="fa fa-gear fa-fw"></i> Reset Password</a>
                        </li>
                        <li>
                            <a href="/TimeSheetMasterExport/Report"><i className="fa fa-table fa-fw"></i>Export All TimeSheets</a>
                        </li>
                        <li>
                            <a href="/ExpenseMasterExport/Report"><i className="fa fa-table fa-fw"></i>Export All Expense</a>
                        </li>
                        <li>
                            <a href="/AddNotification/Add"><i className="fa fa-bell fa-fw"></i>Push Notification</a>
                        </li>
                    </ul>
                </div>
                {/* <!-- /.sidebar-collapse --> */}
            </div>
            {/* <!-- /.navbar-static-side --> */}
        </nav>
        <div id="page-wrapper">
            <div className="row">

                <script src="/Scripts/datetimepicker/jquery-1.12.4.js"></script>
        
                <script src="/Scripts/jquery.validate.min.js"></script>
                <script src="/Scripts/jquery.validate.unobtrusive.min.js"></script>
                <script src="/Scripts/datetimepicker/jqueryui.js"></script>
                <script src="/Template/vendor/bootstrap/js/bootstrap.min.js"></script>
                <script src="/Scripts/datetimexdsoft/build/jquery.datetimepicker.full.min.js"></script>

                




<form>
    <div className="panel panel-default">
        <div className="panel-heading">Add Notification</div>
        <div className="panel-body">
            <div className="row">
                <div className="col-md-4">
                    <label className="manadatory" for="Message">Message</label>
                                                <textarea className="form-control" cols="20" data-val="true" data-val-required="Message Required" id="Message" maxlength="50" name="Message" rows="2" style={{"width": "300px", "height": "100px"}}></textarea>
                    <span className="field-validation-valid text-danger" data-valmsg-for="Message" data-valmsg-replace="true"></span>
                </div>
                <div className="col-md-4">
                    <label className="manadatory" for="FromDate">FromDate</label>
                    <input className="form-control" data-val="true" data-val-date="The field FromDate must be a date." data-val-required="FromDate Required" id="FromDate" maxlength="50" name="FromDate" type="text" value=""/>
                    <span className="field-validation-valid text-danger" data-valmsg-for="FromDate" data-valmsg-replace="true"></span>
                </div>
                <div className="col-md-4">
                    <label className="manadatory" for="ToDate">ToDate</label>
                    <input className="form-control" data-val="true" data-val-date="The field ToDate must be a date." data-val-required="ToDate Required" id="ToDate" maxlength="50" name="ToDate" type="text" value=""/>
                    <span className="field-validation-valid text-danger" data-valmsg-for="ToDate" data-valmsg-replace="true"></span>
                </div>
            </div>
            <div className="row">
                <div className="form-group">
                    <div style={{"margin-top":"10px"}} className="col-md-offset-0 col-md-12">
                        <input type="submit"value="Save Details" className="btn btn-success"/>
                        <input type="" className="btn btn-danger" value="Cancel"/>
                        <input type="" className="btn btn-info" value="All Notification"/>
                    </div>
                </div>
            </div>

        </div>
    </div>
</form>

            </div>

        </div>
    </div>

                
        </div>
        )
    }
}

export default PushNotification;