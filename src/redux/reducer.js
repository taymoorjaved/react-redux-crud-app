import { DELETE_USER, EDIT_USER, SHOW_ALL_USER } from "./types";

const InitialState = {
  users: [],
};

export const userReducer = (state = InitialState, action) => {
  switch (action.type) {
    case DELETE_USER: {
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    }
    case EDIT_USER: {
      const updatedUsers = state.users.map((user) => {
        return {
          ...user,
          ...(user.id === action.payload.id && {
            name: action.payload.data,
          }),
        };
      });
      return {
        users: updatedUsers,
      };
    }
    case SHOW_ALL_USER: {
      return {
        ...state,
        users: action.payload,
      };
    }
    default:
      return state;
  }
};
