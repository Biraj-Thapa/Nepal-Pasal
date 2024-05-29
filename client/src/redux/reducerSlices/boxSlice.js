import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backgroundColor: "red",
  width: 50,
  height: 50,
  borderRadius: "0%",
};

const boxSlice = createSlice({
  name: "box",
  initialState,
  reducers: {
    changeHeight(state) {
      state.height = state.height + 5;
    },
    changeWidth(state) {
      state.width = state.width + 5;
    },
    changeShape(state) {
      if (state.borderRadius === "0%") {
        state.borderRadius = "50%";
      } else {
        state.borderRadius = "0%";
      }
    },
    changeBackgroundColor(state,actions){
      state.backgroundColor=actions.payload

    }

  },
});

export const { changeHeight, changeShape, changeWidth,changeBackgroundColor } = boxSlice.actions;
export default boxSlice.reducer;
