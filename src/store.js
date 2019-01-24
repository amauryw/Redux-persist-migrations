import { createStore, combineReducers } from "redux";
import { numberReducer, messageReducer } from "./redux";
import { persist } from "./services/reduxPersist";

import { persistStore, createMigrate } from "redux-persist";
import { migrations } from "./redux/numberOfChange";

const MIGRATION_DEBUG = false;

const numberPersistConfig = {
  key: "persistedStore",
  version: 1,
  migrate: createMigrate(migrations, { debug: MIGRATION_DEBUG })
};

const reducers = combineReducers({
  persistedStore: persist(numberPersistConfig, numberReducer),
  notPersistedStore: messageReducer
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);

export default store;
