import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CartState = {
  itens: Produto[]
}

const initialState: CartState = {
  itens: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Produto>) => {
      const purchase = action.payload

      if (state.itens.find((p) => p.id === purchase.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(purchase)
      }
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
