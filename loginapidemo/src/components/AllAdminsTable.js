import React, { Component } from 'react';
import axios from 'axios';
import ReactTable from "react-table-6";
import 'react-table-6/react-table.css';
import './AllAdminsTable.css';

class AllAdminsTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            loading: true
        }
    }
    async getUsersData() {
        const res = await axios.get('http://ts-user-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/User/GetAllAdmins')
        //console.log(res.data)
        this.setState({ loading: false, projects: res.data })
    }
    componentDidMount() {
        this.getUsersData()
    }
    render() {
        const columns = [{
            Header: 'User ID',
            //headerClassName: 'hdrCls',
            accessor: 'userId',
        }
            , {
            Header: 'Name',
            accessor: 'name',
        }
            , {
            Header: 'Mobile No.',
            accessor: 'mobileno',
        }
            , {
            Header: 'Email ID',
            accessor: 'emailID',
        }
            , {
            Header: 'Gender',
            accessor: 'gender',
        }
            , {
            Header: 'DOB',
            accessor: 'birthdate',
        }
        ]
        return (
            <div id="page-wrapper">
                <div class="row">
                    <ReactTable
                        data={this.state.projects}
                        columns={columns}
                    />
                </div>
            </div>
        )
    }
}

export default AllAdminsTable;