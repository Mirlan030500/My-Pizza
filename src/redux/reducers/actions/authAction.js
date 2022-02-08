import { AUTH_LOGOUT, SUCCESS_AUTHORIZATION } from "../actionTypes";

export const successAuth = (payload) => ({
    type: SUCCESS_AUTHORIZATION,
    payload
});

export const logoutAuth =() =>({
    type: AUTH_LOGOUT
})