import { configureStore, Tuple, combineReducers } from "@reduxjs/toolkit"
import { logger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterSlice from "../reducerSlices/counterSlice";
import boxSlice from "../reducerSlices/boxSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  box: boxSlice,
  counter: counterSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: () => new Tuple(logger),
});

export const persistor = persistStore(store);
