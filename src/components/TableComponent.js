import React from "react";
import { Container, Button } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

const { SearchBar } = Search;

const columns = [
  {
    dataField: "id",
    text: "User ID",
    sort: true,
    headerStyle: () => {
      return { width: "5%" };
    },
  },
  {
    dataField: "name",
    sort: true,
    text: "User Name",
  },
  {
    dataField: "address",
    sort: true,
    text: "Address",
  },
  {
    dataField: "phone",
    sort: true,
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

const defaultSorted = [
  {
    dataField: "id",
    order: "desc",
  },
];

export const TableComponent = (props) => {
  return (
    <Container>
      <ToolkitProvider
        bootstrap4
        keyField="id"
        data={props.users}
        columns={columns}
        defaultSorted={defaultSorted}
        search
      >
        {(props) => (
          <div>
            <div className="float-end">
              <SearchBar {...props.searchProps} placeholder="Search..." />
            </div>

            <BootstrapTable {...props.baseProps} />
          </div>
        )}
      </ToolkitProvider>
    </Container>
  );
};

export default TableComponent;
