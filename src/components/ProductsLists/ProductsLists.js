import React from 'react'
import SideNav from '../SideNav/SideNav'
import Products from '../Products/Products'
import HomeCarousel from '../SideNav/HomeCarousel/HomeCarousel'

const ProductsLists = () => {
  return (
    <div>
        <div className="d-flex mx-2 mt-5 ">
        <div>
        <SideNav />
        </div>

        <div className="w-100">
          
    <HomeCarousel />
          <Products />
        </div>
      </div>
    </div>
  )
}

export default ProductsLists