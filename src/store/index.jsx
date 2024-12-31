import {configureStore } from '@reduxjs/toolkit'
import productReducer from '../slice/productSlice'
import cartReducer from '../slice/cartSlice'
import wishlistReducer from '../slice/wishlistSlice'
import filterReducer from '../slice/filterSlice'

export const store = configureStore({
    reducer:{
       products: productReducer,
       cart: cartReducer,
       wishlist: wishlistReducer,
       filterdata: filterReducer
    }
})