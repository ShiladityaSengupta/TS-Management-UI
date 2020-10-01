import React, { Component } from 'react';
import './CreateUser.css'
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

class CreateUser extends Component {
    constructor() {
        super();
        this.state = {
            Name: '',
            Mobile: '',
            EmailID: '',
            Gender: '',
            Birthdate:'',
            DateofJoining:'',
            Username:'',
            Password:'',
            ConfirmPassword:'',
            UserAdded:false
        }
    }

    handleSubmit = (e) => {
        alert('hi');        
        e.preventDefault();
        axios.post('http://ts-user-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/User/CreateUser/',
            {
                "name": this.state.Name,
                "mobileno": this.state.Mobile,
                "emailID": this.state.EmailID,
                "username": this.state.Username,
                "password": this.state.Password,
                "confirmPassword": this.state.ConfirmPassword,
                "gender": this.state.Gender,
                "birthdate": this.state.Birthdate,
                "roleID": 3,
                "dateofJoining": this.state.DateofJoining
            }
            
        )
            .then(res => {
                alert('hello');
                if (res.status === 201) {
                    console.log('User created successfully')
                    this.setState({ UserAdded: true })
                    console.log(this.state.UserAdded)
                }

            })
            .catch((error) => console.log(error.response.request._response));
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div id="page-wrapper">
                <div className="row">
                                    <h4 class="page-header">Create User</h4>

                                    <div class="panel panel-default">
                                        <div class="panel-heading">Create User</div>
                                        <div class="panel-body">

                            <form onSubmit={this.handleSubmit}>
                                                <div class="row">
                                                <div class="col-lg-4">
                                                    <label class="control-label manadatory" for="Name">Name</label>
                                        <input class="form-control" data-val="true" data-val-required="Enter Name" id="Name" maxlength="40" name="Name" type="text" onChange={this.handleChange}/>
                                                        <span class="field-validation-valid text-danger" data-valmsg-for="Name" data-valmsg-replace="true"></span>
                                                </div>
                                                    <div class="col-lg-4">
                                                        <label class="control-label manadatory" for="Mobileno">Mobileno</label>
                                        <input class="form-control" data-val="true" data-val-regex="Wrong Mobileno" data-val-required="Mobileno Required" id="Mobileno" maxlength="10" name="Mobileno" type="number" onChange={this.handleChange}/>
                                                            <span class="field-validation-valid text-danger" data-valmsg-for="Mobileno" data-valmsg-replace="true"></span>
                                                    </div>
                                                        <div class="col-lg-4">
                                                            <label class="control-label manadatory" for="EmailID">EmailID</label>
                                        <input class="form-control" data-val="true" data-val-required="EmailID Required" id="EmailID" maxlength="50" name="EmailID" type="email" onChange={this.handleChange}/>
                                                                <span class="field-validation-valid text-danger" data-valmsg-for="EmailID" data-valmsg-replace="true"></span>
                                                        </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="clearfix"></div>
                                                            <div class="col-lg-4" style={{"margin-top":"20px"}}>





                                                                <label class="control-label manadatory" for="Gender">Gender</label>

{/*                                                                 
                                                                <input data-val="true" data-val-required="Gender Required" id="Gender" name="Gender" type="radio" value="M"/> <label for="">Male</label>
                                                                    <input id="Gender" name="Gender" type="radio" value="F"/> <label for="">Female</label>
                                                                        <br/>
                                                                            <span class="field-validation-valid text-danger" data-valmsg-for="Gender" data-valmsg-replace="true"></span>
                                                                             */}

                                        <div className="radio">
                                            <label>
                                                <input type="radio" value="M" checked={true} id="Gender" name="Gender" onChange={this.handleChange}/>
            Male
          </label>
                                        </div>
                                        <div className="radio">
                                            <label>
                                                <input type="radio" value="F" id="Gender" name="Gender" onChange={this.handleChange}/>
            Female
          </label>
                                        </div>


                    </div>








                                                                        <div class="col-lg-4">
                                                                            <label class="control-label" for="Birthdate">Birthdate</label>
                                        <input class="form-control hasDatepicker" data-val-date="The field Birthdate must be a date." id="Birthdate" name="Birthdate" type="date" onChange={this.handleChange}/>
                                                                                <span class="field-validation-valid text-danger" data-valmsg-for="Birthdate" data-valmsg-replace="true"></span>
                    </div>
                                                                            <div class="col-lg-4">
                                                                                <label class="control-label" for="DateofJoining">DateofJoining</label>
                                        <input class="form-control hasDatepicker" data-val-date="The field DateofJoining must be a date." id="DateofJoining" name="DateofJoining" type="date" onChange={this.handleChange}/>
                                                                                    <span class="field-validation-valid text-danger" data-valmsg-for="DateofJoining" data-valmsg-replace="true"></span>
                    </div>
                                                                            </div>
                                                                            <div class="row">
                                                                                <div class="col-lg-4">
                                                                                    <label class="control-label manadatory" for="Username">Username</label>
                                        <input class="form-control valid" data-val="true" data-val-minlength="Minimum Username must be 6 in charaters" data-val-minlength-min="6" data-val-required="Username Required" id="Username" maxlength="20" name="Username" onkeypress="return onlyspecchar(event);" type="text" onChange={this.handleChange}/>
                                                                                        <span class="text-danger field-validation-valid" data-valmsg-for="Username" data-valmsg-replace="true"></span>
                    </div>
                                                                                    <div class="col-lg-4">
                                                                                        <label class="control-label manadatory" for="Password">Password</label>
                                        <input class="form-control valid" data-val="true" data-val-minlength="Minimum Password must be 7 in charaters" data-val-minlength-min="7" data-val-required="Password Required" id="Password" maxlength="30" name="Password" type="password" onChange={this.handleChange}/>
                                                                                            <span class="text-danger field-validation-valid" data-valmsg-for="Password" data-valmsg-replace="true"></span>
                    </div>
                                                                                        <div class="col-lg-4">
                                                                                            <label class="control-label manadatory" for="ConfirmPassword">ConfirmPassword</label>
                                        <input class="form-control" data-val="true" data-val-equalto="Enter Valid Password" data-val-equalto-other="*.Password" id="ConfirmPassword" name="ConfirmPassword" type="password" onChange={this.handleChange}/>
                                                                                                <span class="field-validation-valid text-danger" data-valmsg-for="ConfirmPassword" data-valmsg-replace="true"></span>
                    </div>
                                                                                        </div>
                                                                                        <br/>
                                                                                            <div class="row">
                                                                                                <div class="col-lg-4">
                                        <input type="submit" value="Create User" class="btn btn-success" style={{ 'margin-right': 10 }} />
                                        <a class="btn btn-danger" href="/Registration/Registration" style={{ 'margin-right': 10 }} >Clear</a>

                                                                                                        <a class="btn btn-info" href="/AllUsers/Users">All Users</a>

                    </div>
     </div>

                                                                                        
</form>
                            {
                                this.state.UserAdded ?
                                    <div className="p-3 mb-2 bg-success text-white" style={{ margin: 'auto', width: '50%', padding: '10px' }}>User added successfully</div>
                                    :
                                    <div></div>
                            }
        </div>
                                                                                    </div>


                </div>

            </div>
        )
    }
}

export default CreateUser;
