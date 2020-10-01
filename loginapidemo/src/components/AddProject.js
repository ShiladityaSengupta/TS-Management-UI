import React, { Component } from 'react';
import './AddProject.css'
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

class AddProject extends Component {
    constructor() {
        super();
        this.state = {
            ProjectCode: '',
            ProjectName: '',
            NatureofIndustry: '',
            ProjectAdded: false
        }
    }

    handleSubmit = (e) => {
        alert('hi');
        e.preventDefault();
        //API URL= http://ts-project-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Project/createProject
        //axios.post('http://ts-project-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Project/createProject/',
        axios.post('http://project-service-git-test-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Project/createProject/',
            {
                "projectName": this.state.ProjectName,
                "natureofIndustry": this.state.NatureofIndustry,
                "projectCode": this.state.ProjectCode,
            }
        )
            .then(res => {
                if (res.status === 201) {
                    console.log('Data inserted successfully')
                    this.setState({ ProjectAdded: true })
                    console.log(this.state.ProjectAdded)
                }

            })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
                    <div id="page-wrapper">
                        <div className="row">

                            <h4 className="page-header">Add Project</h4>


                            <div className="col-lg-6">

                                <form onSubmit={this.handleSubmit}>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">Add Project Details</div>
                                        <div className="panel-body">
                                            <div className="form-group">
                                                <label className="manadatory" for="ProjectCode">ProjectCode</label>
                                                <input className="form-control" id="ProjectCode" maxlength="90" name="ProjectCode" type="text" onChange={this.handleChange} />
                                            </div>

                                            <div className="form-group">
                                                <label className="manadatory" for="ProjectName">ProjectName</label>
                                                <textarea className="form-control" cols="20" id="ProjectName" maxlength="90" name="ProjectName" rows="2" onChange={this.handleChange}></textarea>
                                            </div>

                                            <div className="form-group">
                                                <label className="manadatory" for="NatureofIndustry">NatureofIndustry</label>
                                                <textarea className="form-control" cols="20" id="NatureofIndustry" name="NatureofIndustry" rows="2" onChange={this.handleChange}></textarea>
                                            </div>

                                            <div className="row">
                                                <div className="form-group">
                                                    <div className="col-md-offset-0 col-md-12">
                                                        <input type="submit" value="Save Details" className="btn btn-success" style={{ 'margin-right': 10 }} />
                                                        <input type="reset" value="Cancel" className="btn btn-danger" style={{ 'margin-right': 10 }} />
                                                        <Link to='/Project/Index'>
                                                            <input type="reset" value="All Projects" className="btn btn-info" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                                {
                                    this.state.ProjectAdded ?
                                        <div className="p-3 mb-2 bg-success text-white" style={{ margin: 'auto', width: '50%', padding: '10px' }}>Project added successfully</div>
                                        :
                                        <div></div>
                                }

                            </div>


                        </div>

                    </div>
        )
    }
}

export default AddProject;
