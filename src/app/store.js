import { configureStore } from "@reduxjs/toolkit";

import prouductReducer from "../features/product/prouductSlice";
import cartReducer from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    product: prouductReducer,
    cart: cartReducer,
  },
});

export default store;
