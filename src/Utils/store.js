import { configureStore } from "@reduxjs/toolkit";
import teamSlice from '../Utils/teamSlice'

const store = configureStore({
    reducer:{
        team:teamSlice
    }
})

export default store;