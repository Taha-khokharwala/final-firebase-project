import { configureStore } from '@reduxjs/toolkit';
import { persistStore , persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import useReducer from './slice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, useReducer);

const store = configureStore({
  reducer: {
    user : persistedReducer,
  }
});

export const persistor = persistStore(store);

export default store