import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoriteState = {
  itens: Produto[]
}

const initialState: FavoriteState = {
  itens: []
}

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Produto>) => {
      const newFavorite = action.payload

      const existingFavoriteIndex = state.itens.findIndex(
        (p) => p.id === newFavorite.id
      )
      if (existingFavoriteIndex !== -1) {
        state.itens.splice(existingFavoriteIndex, 1)
      } else {
        state.itens.push(newFavorite)
      }
    }
  }
})

export const { addFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer
