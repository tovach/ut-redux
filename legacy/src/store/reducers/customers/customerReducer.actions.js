const ADD_CUSTOMER = 'ADD_CUSTOMER';
const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS';
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';

const addCustomerAction = (payload) => {
    return {
        type: ADD_CUSTOMER,
        payload
    };
};

const fetchCustomerAction = (payload) => {
    return {
        type: FETCH_CUSTOMERS,
        payload
    };
};

const removeCustomerAction = (payload) => {
    return {
        type: REMOVE_CUSTOMER,
        payload
    };
};

export {ADD_CUSTOMER, REMOVE_CUSTOMER, FETCH_CUSTOMERS, addCustomerAction, fetchCustomerAction, removeCustomerAction};
