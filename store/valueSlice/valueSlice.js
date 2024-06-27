export const actionPlus = (newValue) => {
  return {
    type: "value/add",
    payload: newValue,
  };
};

export const actionMinus = (newValue) => {
  return {
    type: "value/delete",
    payload: newValue,
  };
};

export const valueReducer = (state = { balance: 0 }, action) => {
  switch (action.type) {
    case "value/add":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "value/delete":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    default:
      return state;
  }
};
