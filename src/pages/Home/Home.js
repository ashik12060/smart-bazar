import React from 'react'
import Header from '../../components/Shared/Header/Header'
import TableHeader from '../../components/TableHeader/TableHeader'
import ProductsLists from '../../components/ProductsLists/ProductsLists'
import Footer from '../../components/Shared/Footer/Footer'
import HomeCarousel from '../../components/SideNav/HomeCarousel/HomeCarousel'

const Home = () => {
  return (
    <>
    <Header />
    <TableHeader />
    <ProductsLists />

    <Footer />

    </>
  )
}

export default Home