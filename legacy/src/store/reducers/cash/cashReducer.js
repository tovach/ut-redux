import {ADD_CASH, WITHDRAW_CASH} from "./cashReducer.actions";

const initialState = {
    cash: 0
};

const cashReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_CASH:
            return {...state, cash: state.cash + payload};
        case WITHDRAW_CASH :
            if (state.cash === 0 || state.cash - payload < 0) {
                return state;
            }
            return {...state, cash: state.cash - payload};
        default :
            return state;
    }
};

export {cashReducer};
