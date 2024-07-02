import { createStore } from 'redux';
import todoReducer from './reducer';
import { persistStore,persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig={
    key: 'persist-store',
    storage
}

const persistedReducer =  persistReducer(persistConfig,todoReducer)

const store = createStore(persistedReducer);

export const persistor = persistStore(store) 
export default store;