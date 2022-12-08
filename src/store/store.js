import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './Slices/cartSlice'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

const store = configureStore({ reducer: persistedReducer, middleware: [thunk] })

export const persistedStore = persistStore(store)

export default store
