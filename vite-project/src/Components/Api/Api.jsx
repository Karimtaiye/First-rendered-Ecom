import { useDispatch, useSelector} from 'react-redux'
import { allApiData } from '../Redux/ProductState'
import axios from 'axios'
import { useEffect } from 'react'
    const allProducts = useSelector((state)=>state.persistedReducer.products)
        const Dispatch = useDispatch()
    const getAllData = () => {
    const url = "https://fakestoreapi.com/products"
         axios.get(url)
        .then(res=> Dispatch(allApiData(res)))
        
    } 
    console.log(allProducts);
    useEffect(()=>{
        getAllData()
    },[])