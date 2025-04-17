import { SET_JOBS, SET_LOADING, SET_ERROR } from '../actionsTypes'

const BASE_URL = 'https://strive-benchmark.herokuapp.com/api/jobs?search='

export const fetchJobsAction = (query) => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADING })

    try {
      const response = await fetch(BASE_URL + query + '&limit=20')
      if (response.ok) {
        const { data } = await response.json()
        dispatch({ type: SET_JOBS, payload: data })
      } else {
        dispatch({ type: SET_ERROR })
      }
    } catch (err) {
      dispatch({ type: SET_ERROR })
    }
  }
}