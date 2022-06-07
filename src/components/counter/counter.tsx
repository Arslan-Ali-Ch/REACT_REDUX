import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AsyncIncrement, decrement, increment, incrementByAmount } from '../reducer/reducer';
import './counter.css';
const Counter = () => {
const [val,setval]=useState('');
const dispatch=useDispatch();
const data=Number(val)||0;
const res=useSelector((state:any)=>{
    console.log(state);
    
    return state.counter.count
});

    return (
    <div>
        <p>{`Conter : ${res}`}</p>
        <div className='main'>
         <input type="number"  onChange={(e)=>{setval(e.target.value)}}/>
            
            <button className='btn' onClick={()=>{
                dispatch(increment())
            }}>Increment</button>
            <button className='btn'
            onClick={()=>{
                dispatch(decrement())
            }}>Decrement</button>
            <button className='btn'
            onClick={()=>{
                dispatch(incrementByAmount(data))
            }}>IncrementBYAmount</button>
            <button className='asyncbtn'
             onClick={()=>{
                dispatch(AsyncIncrement(data))
            }}>AsyncIncrement</button>
            <button className='btn'
            onClick={()=>{
            if(data%2==1){
                dispatch(incrementByAmount(data))
            
            }
            }}>IncrementIFOdd</button>
        </div>      
    </div>
  )
}


export default Counter
