import { configureStore } from "@reduxjs/toolkit";
import Counter from '../reducer/reducer';


export const store=configureStore({
    reducer:{
        counter:Counter
    }
});