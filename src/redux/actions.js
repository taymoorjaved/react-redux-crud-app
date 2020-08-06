import { EDIT_USER, SHOW_ALL_USER, DELETE_USER } from "./types";
import axios from "axios";

export const fetchUsers = () => {
  return (dispatch) =>
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) =>
      dispatch({
        type: SHOW_ALL_USER,
        payload: res.data,
      })
    );
};

export const editUser = (id, myValue) => {
  return (dispatch) =>
    axios
      .patch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        dispatch({
          type: EDIT_USER,
          payload: {
            id: id,
            data: myValue,
          },
        });
      });
};

export const deleteUser = (id) => {
  return (dispatch) =>
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        dispatch({
          type: DELETE_USER,
          payload: id,
        });
      });
};
