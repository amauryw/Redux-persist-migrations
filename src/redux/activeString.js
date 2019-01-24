const initialState = {
  confirmedMessage: "Bienvenue",
  inputValue: ""
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STRING":
      return {
        ...state,
        inputValue: action.payload.value
      };
    case "APPLY":
      return {
        ...state,
        confirmedMessage: state.inputValue
      };

    case "CLEAR_STRING":
      return {
        ...state,
        inputValue: ""
      };
    default:
      return state;
  }
};

export const getMessage = state => state.notPersistedStore.inputValue;
export const getConfirmedMessage = state =>
  state.notPersistedStore.confirmedMessage;

export const setMessageActionCreator = value => ({
  type: "SET_STRING",
  payload: {
    value
  }
});

export const applyActionCreator = newString => ({
  type: "APPLY",
  payload: { value: newString }
});

export const clearActionCreator = newString => ({
  type: "CLEAR_STRING",
  payload: {}
});
export default messageReducer;
