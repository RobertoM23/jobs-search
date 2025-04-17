import { configureStore, combineReducers } from '@reduxjs/toolkit'
import favouritesReducer from './reducers/favouritesReducer'
import jobsReducer from './reducers/jobsReducer'
import { thunk } from 'redux-thunk'

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  jobs: jobsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
})