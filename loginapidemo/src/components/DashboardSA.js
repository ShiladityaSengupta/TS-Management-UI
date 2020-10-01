import React, { Component } from 'react';
import './DashboardSA.css'
import axios from 'axios';

class DashboardSA extends Component {

    constructor() {
        super();
        this.state = {
            ProjectCount: '',
            UserCount: '',
            AdminCount:''
        }

        axios.get('http://project-service-git-test-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Project/ProjectCount')
            .then(res => {
                this.setState({ ProjectCount: res.data[0].projectCount })
            })

        axios.get('http://ts-user-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/User/UserCount')
            .then(res => {
                this.setState({ UserCount: res.data[0].userCount })
            })

        axios.get('http://ts-user-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/User/AdminCount')
            .then(res => {
                this.setState({ AdminCount: res.data[0].adminCount })
            })

    }


    render() {       

        return (
                <div id="page-wrapper">
                    <div class="row">


                        <h4 class="page-header">Dashboard</h4>


                        <div class="row">
                            <div class="col-lg-3 col-md-6">
                                <div class="panel panel-primary">
                                    <div class="panel-heading">
                                        <div class="row">
                                            <div class="col-xs-3">
                                                <i class="fa fa-comments fa-5x"></i>
                                            </div>
                                            <div class="col-xs-9 text-right">
                                                <div class="huge">{this.state.UserCount}</div>
                                                <div>User Count!</div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="/AllUsers/Users">
                                        <div class="panel-footer">
                                            <span class="pull-left">View Details</span>
                                            <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                            <div class="clearfix"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="panel panel-green">
                                    <div class="panel-heading">
                                        <div class="row">
                                            <div class="col-xs-3">
                                                <i class="fa fa-tasks fa-5x"></i>
                                            </div>
                                            <div class="col-xs-9 text-right">
                                                <div class="huge">{this.state.AdminCount}</div>
                                                <div>Admins Count!</div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="/AllUsers/admin">
                                        <div class="panel-footer">
                                            <span class="pull-left">View Details</span>
                                            <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                            <div class="clearfix"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="panel panel-yellow">
                                    <div class="panel-heading">
                                        <div class="row">
                                            <div class="col-xs-3">
                                                <i class="fa fa-shopping-cart fa-5x"></i>
                                            </div>
                                            <div class="col-xs-9 text-right">
                                                <div class="huge">{this.state.ProjectCount}</div>
                                                <div>Total Projects Count!</div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="/Project/Index">
                                        <div class="panel-footer">
                                            <span class="pull-left">View Details</span>
                                            <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                            <div class="clearfix"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
               
        )
    }
}

export default DashboardSA;