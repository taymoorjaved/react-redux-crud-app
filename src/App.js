import React, { useEffect } from "react";
import { connect } from "react-redux";

// Matrial UI imports
import {
  Button,
  TableHead,
  Container,
  TableContainer,
  Paper,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Table,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

// Local Imports
import { fetchUsers, editUser, deleteUser } from "./redux/actions";

// CSS Imports
import "./App.css";

const App = ({ fetchUsers, editUser, users, deleteUser }) => {
  const addValue = (id) => {
    const myValue = prompt("Enter Value", users.find((u) => u.id === id).name);
    editUser(id, myValue);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container className='App'>
      <h1 className='heading-txt'>
        Fetching and Displaying API data with the help of ( Axios, React, Redux
        )
      </h1>
      <TableContainer component={Paper}>
        <Table size='small'>
          <TableHead>
            <TableRow>
              <TableCell className='table-head' align='right'>
                USER-NAME
              </TableCell>
              <TableCell className='table-head' align='right'>
                NAME
              </TableCell>
              <TableCell className='table-head' align='right'>
                EMAIL
              </TableCell>
              <TableCell className='table-head' align='right'>
                CITY
              </TableCell>
              <TableCell className='table-head' align='right'>
                PHONE
              </TableCell>
              <TableCell className='table-head' align='right'>
                COMPANY
              </TableCell>
              <TableCell className='table-head' align='right'>
                WEBSITE
              </TableCell>
              <TableCell className='table-head' align='right'>
                EDIT
              </TableCell>
              <TableCell className='table-head' align='right'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <>
                <TableRow key={index}>
                  <TableCell align='right'>{user.username}</TableCell>
                  <TableCell align='right'>{user.name}</TableCell>
                  <TableCell align='right'>{user.email}</TableCell>
                  <TableCell align='right'>{user.address.city}</TableCell>
                  <TableCell align='right'>{user.phone}</TableCell>
                  <TableCell align='right'>{user.company.name}</TableCell>
                  <TableCell align='right'>{user.website}</TableCell>
                  <EditIcon
                    className='edit-icon'
                    onClick={() => addValue(user.id)}
                  />
                  <DeleteIcon
                    className='delete-icon'
                    onClick={() => deleteUser(user.id)}
                  />
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
  };
};

const mapDispatchToProps = { fetchUsers, editUser, deleteUser };

export default connect(mapStateToProps, mapDispatchToProps)(App);

