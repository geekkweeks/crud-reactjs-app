import React from "react";
import { Container, Button } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const columns = [
  {
    dataField: "id",
    text: "User ID",
    headerStyle: () => {
        return {width: "5%"}
    }
  },
  {
    dataField: "name",
    text: "User Name",
  },
  {
    dataField: "address",
    text: "Address",
  },
  {
    dataField: "phone",
    text: "Phone",
  },
  {
    dataField: "action",
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Button color="primary">
            <FontAwesomeIcon icon={faInfo} /> Detail
          </Button>

          <Button color="info">
            <FontAwesomeIcon icon={faEdit} /> Edit
          </Button>

          <Button color="danger">
            <FontAwesomeIcon icon={faTrash} /> Remove
          </Button>
        </div>
      );
    },
  },
];

export const TableComponent = (props) => {
  return (
    <Container>
      <BootstrapTable keyField="id" data={props.users} columns={columns} />
    </Container>
  );
};

export default TableComponent;
