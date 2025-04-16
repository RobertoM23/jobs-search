import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  companies: [],
}

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      if (!state.companies.includes(action.payload)) {
        state.companies.push(action.payload)
      }
    },
    removeFromFavourites: (state, action) => {
      state.companies = state.companies.filter(c => c !== action.payload)
    },
  },
})

export const { addToFavourites, removeFromFavourites } = favouritesSlice.actions
export default favouritesSlice.reducer