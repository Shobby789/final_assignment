import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload);
      item.quantity++;
    },

    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },

    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item._id !== action.payload
      );
      state.cart = removeItem;
    },

    removeAll: (state, action) => {
      const emptyArr = [];
      return (state.cart = emptyArr);
    },

    calculateTotal: (state, action) => {
      let amount = 0;
      let total = 0;
      state.cart.forEach((item) => {
        amount += item.itemPrice;
        total += item.itemPrice * item.amount;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
