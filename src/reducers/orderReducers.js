const initialState = {
    items: {},
};
export default function (state = initialState, action) {
    switch (action.type) {
        case "FETCH_ORDER":
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}
