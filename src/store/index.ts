import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './reducers/favorites'
import cartReducer from './reducers/cart'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
