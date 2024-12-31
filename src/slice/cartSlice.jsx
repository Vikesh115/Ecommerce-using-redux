import { createSlice } from "@reduxjs/toolkit";

// Utility function to get the initial cart state from localStorage
const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: getCartFromLocalStorage(), // Load cart from localStorage
    cartCount: getCartFromLocalStorage().reduce((count, item) => count + item.quantity, 0), // Calculate initial count
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      // Update cartCount based on the total quantity
      state.cartCount = state.cart.reduce((count, item) => count + item.quantity, 0);

      // Persist the updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      // Filter out the product directly by its ID
      state.cart = state.cart.filter((item) => item.id !== action.payload);

      // Recalculate the cart count after removing the product
      state.cartCount = state.cart.reduce((count, item) => count + item.quantity, 0);

      // Persist the updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.cartCount += 1;

        // Persist the updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.cartCount -= 1;
        } else {
          // Optionally remove item if quantity becomes 0
          state.cart = state.cart.filter((i) => i.id !== action.payload);
          state.cartCount -= 1;
        }

        // Persist the updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
