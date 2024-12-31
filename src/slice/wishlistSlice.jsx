import { createSlice } from "@reduxjs/toolkit";

// Utility function to get the initial wishlist state from localStorage
const getWishlistFromLocalStorage = () => {
  const storedWishlist = localStorage.getItem("wishlist");
  return storedWishlist ? JSON.parse(storedWishlist) : [];
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: getWishlistFromLocalStorage(), // Load wishlist from localStorage
    wishlistCount: getWishlistFromLocalStorage().reduce((count, item) => count + item.quantity, 0), // Calculate initial count
  },
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload;

      // Check if the product already exists in the wishlist
      const existingProduct = state.wishlist.find((item) => item.id === product.id);

      if (existingProduct) {
        // If product exists, increase its quantity
        existingProduct.quantity += 1;
      } else {
        // If product doesn't exist, add it with quantity 1
        state.wishlist.push({ ...product, quantity: 1 });
      }

      // Recalculate wishlist count
      state.wishlistCount = state.wishlist.reduce((count, item) => count + item.quantity, 0);

      // Persist the updated wishlist to localStorage
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    removeFromWishlist: (state, action) => {
      // Filter out the product directly by its ID
      state.wishlist = state.wishlist.filter((item) => item.id !== action.payload);

      // Recalculate the wishlist count after removing the product
      state.wishlistCount = state.wishlist.reduce((count, item) => count + item.quantity, 0);

      // Persist the updated wishlist to localStorage
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
