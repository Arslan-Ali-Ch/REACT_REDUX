import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CounterFetch from './counterApi'

export interface data{
    count:number,
    status:'idle'|'loading'|'failed'
};

const initialState:data={
count:0,
status:'idle'
};

export const AsyncIncrement:any=createAsyncThunk(
'counter/AsyncIncrement',
async (amount:number)=>{
    const response=await CounterFetch(amount);
    return response.data;

}
);



export const CounterSlice=createSlice(
    {
        name:'counter',
        initialState,
        reducers:{
            increment:(state)=>{
                state.count+=1
            }
            ,
            decrement:(state)=>{
                state.count-=1
            }
            ,
            incrementByAmount:(state,action)=>{
                state.count+=action.payload
            }

        },
        extraReducers:(builder)=>{
            builder
            .addCase(AsyncIncrement.pending,(state)=>{
                state.status='loading'
            })
            .addCase(AsyncIncrement.fulfilled,(state,action)=>{
                state.count+=action.payload
            })
            .addCase(AsyncIncrement.rejected,(state)=>{
                state.status='failed'
            })
        }
    
        
    });





    export const {increment,decrement,incrementByAmount}=CounterSlice.actions;
    export default CounterSlice.reducer;