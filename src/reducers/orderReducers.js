const initialState = {
    items: {},
    orderCount: {},
};
export default function (state = initialState, action) {
    switch (action.type) {
        case "FETCH_ORDER":
            return {
                ...state,
                items: action.payload
            };
        case "FETCH_ORDER_COUNT":
            return {
                ...state,
                orderCount: action.payload
            };
        default:
            return state;
    }
}
