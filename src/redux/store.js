import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from './contactsRedux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'] 
}

const persistedReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
  reducer: {
  contacts: persistedReducer,
  
  },
});
export const persistor = persistStore(store)