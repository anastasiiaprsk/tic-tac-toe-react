import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "@reduxjs/toolkit"
import {boardReducer} from "../reducers/create-board-reducer";

const reducers = combineReducers({
    board: boardReducer
})

export const store = configureStore({reducer: reducers})