import React, { Component } from 'react';
import axios from 'axios';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
      loading: true
    }
  }
  async getNotifications() {
    const res = await axios.get('http://ts-notification-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Notification/getAllNotifications')
    //console.log(res.data)
    this.setState({ loading: false, notifications: res.data })
  }
  componentDidMount() {
    this.getNotifications()
  }
  render() {
    const columns = [{
      Header: 'Not ID',
      accessor: 'notificationsId',
    }
      , {
      Header: 'Status',
      accessor: 'status',
    }
      , {
      Header: 'Msg',
      accessor: 'message',
    }
    ]
    return (
      <ReactTable
        data={this.state.notifications}
        columns={columns}
      />
    )
  }
}

export default App;