import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  coffeeMenu: [],
  status: '',
};

export const fetchCoffee = createAsyncThunk('fetchCoffee', async () => {
  const response = await axios.get('https://random-data-api.com/api/coffee/random_coffee?size=20');
  
  return response.data;
});

const coffeeSlice = createSlice({
  name: 'coffee',
  initialState,
  reducers: {
    
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCoffee.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCoffee.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.coffeeMenu = action.payload;
      })
      .addCase(fetchCoffee.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export default coffeeSlice.reducer;