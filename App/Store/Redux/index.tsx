import { configureStore } from '@reduxjs/toolkit'
import User from './User'

export const store = configureStore({
  reducer: { User },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
