import {fetchCustomerAction} from "../reducers/customers/customerReducer.actions";

const fetchCustomers = () => async (dispatch) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        dispatch(fetchCustomerAction(data));
    } catch (e) {
        console.log(e);
    }
};

export {fetchCustomers};
