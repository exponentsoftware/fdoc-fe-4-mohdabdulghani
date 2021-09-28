import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  AlbumData: [],
  searchString: "",
};
export const mainSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    removeAll: (state) => {
      state.status = "idle";
      state.AlbumData = [];
    },
    fakedataPopulate: (state, action) => {
      state.AlbumData = action.payload;
    },
    addNewAlbum: (state, { payload }) => {
      if (payload) state.AlbumData = [...state.AlbumData, payload];
    },
    deleteAlbum: (state, { payload }) => {
      if (payload)
        state.AlbumData = state.AlbumData.filter((x) => x.id !== payload);
    },
    updateSearch: (state, action) => {
      // console.log("mama", action?.payload);
      state.searchString = action?.payload;
    },
  },
});

export const {
  removeAll,
  fakedataPopulate,
  addNewAlbum,
  deleteAlbum,
  updateSearch,
} = mainSlice.actions;

export default mainSlice.reducer;
