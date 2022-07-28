import {useDispatch, useSelector} from "react-redux";
import {addCashAction, withdrawCashAction} from "../store/reducers/cash/cashReducer.actions";
import {addCustomerAction, removeCustomerAction} from "../store/reducers/customers/customerReducer.actions";

import {fetchCustomers} from "../store/asyncActions/fetchCustomers";

const App = () => {
    const dispatch = useDispatch();

    const {cash} = useSelector(state => state.cashReducer);
    const {customers} = useSelector(state => state.customerReducer);


    const addCash = () => {
        dispatch(addCashAction(Number(prompt('Amount'))));
    };

    const withdrawCash = () => {
        dispatch(withdrawCashAction(Number(prompt('Amount'))));
    };

    const addCustomer = () => {
        const user = {
            id: Math.random(),
            name: prompt('Name')
        };

        dispatch(addCustomerAction(user));
    };

    const removeCustomer = () => {
       const res =  dispatch(removeCustomerAction(prompt('Name')));
        console.log(res);
    };

    return (
        <>
            <h2>Cash : {cash}</h2>
            <button onClick={addCash}>Add cash</button>
            <button onClick={withdrawCash}>Withdraw Cash</button>
            <hr/>
            <h2>Customers</h2>

            <ul>
                {customers.map((customer, index) =>
                    <li key={index}>{customer.name}</li>
                )}
            </ul>

            <button onClick={addCustomer}>Add customer</button>
            <button onClick={removeCustomer}>Remove customer</button>
            <button onClick={() => dispatch(fetchCustomers())}>Load from base</button>
        </>);
};

export {App};
