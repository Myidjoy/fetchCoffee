import { configureStore } from '@reduxjs/toolkit';
import coffeeReducer from '../features/coffeeReducer/coffeeReducer';

const store = configureStore({
  reducer: {
    coffee: coffeeReducer
  },
});

export default store;