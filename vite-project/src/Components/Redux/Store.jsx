import { configureStore } from "@reduxjs/toolkit";
import { cartProductState } from "./ProductState"; 
// import { persistReducer, PERSIST} from 'redux-persist'
// import  storage  from "redux-persist/lib/storage";
// import MyReducer from './ProductState'


export const store = configureStore({
    reducer : { 
        cart: cartProductState.reducer
    }
});









// const persistconfig = {
//     key:"root", 
//     storage
// }
// const persistedReducer = persistReducer(persistconfig, MyReducer)
// export const store = configureStore({
//     reducer : { persistedReducer},
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//         serializableCheck: {
//             ignoreActions : [PERSIST],
//         },
//     }),
// });

