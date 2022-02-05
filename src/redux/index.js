import { combineReducers, createStore } from 'redux';

const initialState = {
    data: JSON.parse(localStorage.getItem("auth")) || null,
    name: "Mirlan"
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "success authorization":
            return { ...state, data: action.payload }
            case "logout auth":
                return {...state,data:null}
        default:
            return state;
    }
}
const initialState2 = {
    data: JSON.parse(localStorage.getItem("auth")) || null,
    
}

const basketReducer = (state = initialState2, action) => {
    switch (action.type) {
      
        default:
            return state;
    }
}


export const store = createStore(combineReducers({
    auth: authReducer,
    basket: basketReducer
}));