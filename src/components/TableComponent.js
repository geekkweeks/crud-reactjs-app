import React from 'react'
import { Container } from "reactstrap";
import BootstrapTable from 'react-bootstrap-table-next';


const columns = [{
    dataField: 'id',
    text: 'User ID'
  }, {
    dataField: 'name',
    text: 'User Name'
  }, {
    dataField: 'address',
    text: 'Address'
  },
  {
    dataField: 'phone',
    text: 'Phone'
  }
];

export const TableComponent = (props) => {
    return (
        <Container>
            <BootstrapTable keyField='id' data={ props.users} columns={ columns } />
        </Container>
        
    )
}

export default TableComponent
