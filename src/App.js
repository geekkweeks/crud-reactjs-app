import React, { Component } from 'react'
import NavBarComponent from './components/NavBarComponent'
import JumbotronComponent from './components/JumbotronComponent'
import TableComponent from './components/TableComponent'

export default class App extends Component {

  state = {
    title: "TrenReader Solution",
    users: [
      {
        id: 1,
        name: "Alfan",
        address: "Bekasi",
        phone: "434324"
      },
      {
        id: 2,
        name: "Zahri",
        address: "Medan",
        phone: "56456"
      },
      {
        id: 3,
        name: "Yono",
        address: "Payakumbuh",
        phone: "23432"
      }
    ]
  }

  render() {
    return (
      <div>
        <NavBarComponent />
        <JumbotronComponent  title={this.state.title}/>
        <TableComponent users={this.state.users} />
      </div>
    )
  }
}
