import { AUTH_LOGOUT, SUCCESS_AUTHORIZATION } from "./actionTypes"

const initialState = {
    data: JSON.parse(localStorage.getItem("auth")) || null,
    name: "Mirlan"
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_AUTHORIZATION:
            return { ...state, data: action.payload }
        case AUTH_LOGOUT:
            return { ...state, data: null }
        default:
            return state;
    }
}