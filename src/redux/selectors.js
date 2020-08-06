import { createSelector } from "reselect";

const selectedState = () => state => state.user.users
export const userNameSelector = () => createSelector(selectedState,state => srar)
