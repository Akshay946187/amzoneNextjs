import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./index";

interface CartState{
    cart:any
}

const initialState:CartState = {
    cart:[]
}


const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.cart.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item:any) => item.id !== action.payload);
        }
        
    }
})

export const {addToCart,removeFromCart} = cartSlice.actions

export const getCart = (state:RootState)=>state.cart.cart
export default cartSlice.reducer;