import ProductPage from '../ProductPage/ProductPage'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allApiData } from '../Redux/ProductState';
import './LandingPage.CSS'

function LandingPage() {
  const [landingitems, setLandingItems] = useState()
  const allProducts = useSelector(state=>state.cart.products)
  // console.log("these are my prooducts", allProducts);

  
  return (
    <main className="LandingPage">
        <div className="landingHero">
             <div className="landingWrapper">

             </div>
        </div>
        <ProductPage />
    </main>
  )
}

export default LandingPage