const initialState = {
  number: {
    change: 0,
    lastUpdate: new Date()
  }
};

export const migrations = {
  1: previousVersionState => ({
    number: {
      change: previousVersionState.number,
      lastUpdate: new Date()
    }
  })
};

export const AddUnit = () => ({
  type: "ADD_UNIT",
  payload: {}
});

const numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_UNIT":
      return {
        ...state,
        number: {
          change: state.number.change + 1,
          lastUpdate: new Date()
        }
      };
    default:
      return state;
  }
};

export const addOneActionCreator = () => ({
  type: "ADD_UNIT",
  payload: {}
});

export const getNumberOfChange = state => state.persistedStore.number.change;

export default numberReducer;
