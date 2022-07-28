import {ADD_CUSTOMER, FETCH_CUSTOMERS, REMOVE_CUSTOMER} from "./customerReducer.actions";

const initialState = {
    customers: [{
        id: Math.random(),
        name: 'Vecna'
    }],
};

const customerReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, payload]};
        case FETCH_CUSTOMERS:
            return {...state, customers: [...state.customers, ...payload]};
        case REMOVE_CUSTOMER:
            return {
                ...state,
                customers: state.customers.filter(customer => customer.name.toLowerCase() !== payload.toLowerCase())
            };
        default:
            return state;
    }
};

export {customerReducer};
