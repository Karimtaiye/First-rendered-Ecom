import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './DetailPage.css'
const DetailPage = () =>{
    const [data, setData] = useState({})
    const {id} = useParams()
    // const [add, setAdd] = useState(0)
    const getAllData = () => {
         axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=> setData(res.data))
    }
    // console.log(data);
    useEffect(()=>{
        getAllData()
    },[])
    const handleAddToCart = (name, id, price, image) => {
        dispatch({
            type:"Add_Items",
            name:name,
            id:id,
            price:price,
            image:image, 
        })
        console.log(cart);
    }
  
    return(
        <>
        <div className='mainDetail'>
            <div className='Wrapper'>
            <div className='ImagePart'>
                <img src="" alt="" />
                
            </div>
            <div className='DesPart'>
                <div className='desWrapper'>
                    <div className='topPart'>
                    <h3>Name: title</h3>
                    <h4><span>Des:</span> description</h4>
                    <p>$:.price</p>
                    </div>
                    <div className='BtnPart'>
                        <button className='Cart' onClick={()=>{handleAddToCart(data.title, data.id, data.price, data.image)}}>Add to Cart</button>
                        <button className='Wish'>Add to Wishlist</button>
                    </div>
                </div>

            </div>
            </div>
        </div>
        </>
    )
}
export default DetailPage