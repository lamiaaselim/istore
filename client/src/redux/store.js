import { configureStore } from "@reduxjs/toolkit";
import products from './slices/product';
import cartCounter  from "./slices/cartCounter";


export const store = configureStore({
    reducer: {
        cartCounter,
        products
      },
});
