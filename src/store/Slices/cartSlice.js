import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  noOfCartItems: 0,
  totalAmount: 0,
}

const getTotalAmount = (cartItems) => {
  return cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(3)
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id == action.payload.id,
      )

      if (existingItem) {
        const itemIndex = state.cartItems.findIndex(
          (item) => item.id === existingItem.id,
        )
        state.cartItems[itemIndex] = {
          ...existingItem,
          quantity: existingItem.quantity + action.payload.quantity,
        }
      } else {
        state.cartItems = [...state.cartItems, action.payload]
        state.noOfCartItems += 1
      }
      state.totalAmount = getTotalAmount(state.cartItems)
    },
    removeItem(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id == action.payload.id,
      )
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== existingItem.id,
        )
        state.noOfCartItems -= 1
      } else {
        const itemIndex = state.cartItems.findIndex(
          (item) => item.id === existingItem.id,
        )
        state.cartItems[itemIndex] = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        }
      }
      state.totalAmount = getTotalAmount(state.cartItems)
    },
  },
  clearCart(state, action) {
    state = initialState
  },
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
