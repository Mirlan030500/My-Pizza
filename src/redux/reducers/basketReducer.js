const initialState2 = {
    data: JSON.parse(localStorage.getItem("auth")) || null,

}

export const basketReducer = (state = initialState2, action) => {
    switch (action.type) {

        default:
            return state;
    }
}