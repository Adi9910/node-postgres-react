import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  array:[]
};

type IncrementPayload = {
  name: string;
  email: string;
};

type ArrPayload = {
  array: any[];
};

interface stateType {
  name: string;
  email: string;
  array: any[];
};

const patchRequest = (state: stateType, action: PayloadAction<IncrementPayload>) => {
  state.name = action.payload.name;
  state.email = action.payload.email;
};

const arrayUpdate = (state: stateType, action: PayloadAction<ArrPayload[]>) => {
  state.array = action.payload;
};

const Comp1Slice = createSlice({
  name: "comp-one",
  initialState: initialState,
  reducers: {
    patchRequest: patchRequest,
    arrayUpdate: arrayUpdate,
  },
});

export const { patchRequest: incrementAction, arrayUpdate: arrayUpdateAction } = Comp1Slice.actions;
export default Comp1Slice.reducer;