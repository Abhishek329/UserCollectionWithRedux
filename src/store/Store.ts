import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { UserSlice } from "../app/components/dashboard/UserSlice";

export const Store = configureStore({
    reducer:{
        users: UserSlice.reducer
    }
});



export type RootState = ReturnType<typeof Store.getState>

export type AppDispatch = typeof Store.dispatch


//For Type

export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector