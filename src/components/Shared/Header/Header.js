import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Header = () => {
  return (
    <>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  
  

    <div class="collapse navbar-collapse d-flex justify-content-around" id="navbarSupportedContent">
      <div>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <h2 class="fs-1 fw-bold" aria-current="page" >Smart<span className='font-color'>Bazar</span></h2>
        </li>
        
        
      </ul>
      </div>

    <div>
        
      <form class="d-flex w-100" role="search">
        <input class="form-control me-2 w-100" type="search" placeholder="Search for products" aria-label="Search"/>
        
      </form>
    </div>

    <div>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        
          <a class="nav-link active" aria-current="page" href="#"><FontAwesomeIcon className='fs-5 font-color' icon={faUser} /></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><FontAwesomeIcon className='fs-5 font-color' icon={faHeart} /></a>
        </li> 
        <li class="nav-item">
          <a class="nav-link" href="#"><FontAwesomeIcon className='fs-5 font-color' icon={faCartShopping}  /><span className='ps-1 fw-bold '>0</span></a>
        </li> 
      </ul>
    </div>

    </div>

</nav>
    </>
  )
}

export default Header