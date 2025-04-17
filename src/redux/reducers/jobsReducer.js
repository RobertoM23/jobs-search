import { SET_JOBS, SET_LOADING, SET_ERROR } from '../actionsTypes'

const initialState = {
  results: [],
  loading: false,
  error: false,
}

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true, error: false }
    case SET_ERROR:
      return { ...state, loading: false, error: true }
    case SET_JOBS:
      return { ...state, results: action.payload, loading: false, error: false }
    default:
      return state
  }
}

export default jobsReducer