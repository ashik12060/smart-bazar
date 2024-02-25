import React from 'react'
import SideNav from '../SideNav/SideNav'
import Products from '../Products/Products'

const ProductsLists = () => {
  return (
    <div>
        <div className="d-flex mx-2 ">
        <SideNav />

        <div className="w-100">
          <Products />
        </div>
      </div>
    </div>
  )
}

export default ProductsLists