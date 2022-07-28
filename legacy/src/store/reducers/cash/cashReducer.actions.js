const ADD_CASH = 'ADD_CASH';
const WITHDRAW_CASH = 'WITHDRAW_CASH';

const addCashAction = (payload) => {
    return {
        type: ADD_CASH,
        payload
    };
};


const withdrawCashAction = (payload) => {
    return {
        type: WITHDRAW_CASH,
        payload
    };
};

export {ADD_CASH, WITHDRAW_CASH, addCashAction, withdrawCashAction};
