import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products:[],
    cart:[],
    user:{
        email:"",
         id:"",
         name:"",
         token:""
    },
    Qty:1
}
export const cartProductState = createSlice({
    name:"cart",
    initialState,
    reducers : {
        allApiData: (state, {payload})=>{
            state.products = payload
        },

        userData: (state, {payload})=>{
            state.user = payload 
        },

        AddCart: (state, {payload})=>{
            const findDup = state.cart.findIndex((e)=>e.id === payload.id)
            if(findDup !== -1) 
            state.cart[findDup].Qty +=1
            else {
                state.cart = [...state.cart, 
                    {...payload,
                      Qty: state.Qty}
                  ]
            }
        },

        RemoveCart: (state, {payload})=>{
            state.cart = state.cart.filter((e)=>e.id !==payload.id)
        },

        min_Qty: (state, {payload})=>{
            const findDup = state.cart.findIndex((e)=>e.id === payload.id)
            if(findDup !== -1) 
            state.cart[findDup].Qty -=1
            else {
                state.cart = [...state.cart, 
                    {...payload,
                      Qty: state.Qty}
                  ]
            }
        }
    }
 })
export const {allApiData, userData, AddCart, RemoveCart, min_Qty} = cartProductState.actions
export default cartProductState.reducer