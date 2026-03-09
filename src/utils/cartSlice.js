import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      // vanillaRedux (Older Redux) - Don't Mutate State, Returning was Mandatory
      // const newState = [...state];
      // newState.items.push(action.payload);
      // return newState;

      // Redux Toolkit (Newer Redux) - We've to Mutate the State
      // Redux Toolkit uses Immer behind the scene
      // RTK - Either Mutate the Existing State or return a New State - []
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    // Original State = {items:[]}
    clearCart: (state) => {
      // state.items.length = 0; // Original State = []

      return { items: [] }; // This new [] will  be replace inside the OriginalState []
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
