import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { User } from "../../models/User"
import agent from "../../../api/Agent"

export interface UserState {
  users: User[];
  currentPage: number;
}


export const fetchUsers = createAsyncThunk<User[], number, { state: { users: UserState } }>(
  "users/fetchUsers",
  async (page, { getState }) => {
    const response = await agent.UserActivity.list(page, 10); // Use the provided page parameter
    return response.results;
  }
);



type State ={
     users: User[];
}


const initialState : UserState ={
  users: [],
  currentPage: 1
}

export const UserSlice = createSlice({
    name:'users',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
          state.users = action.payload;
        });
      }       
});

export const selectUsers = (state: { users: State }) => state.users.users;

export default UserSlice.reducer;
