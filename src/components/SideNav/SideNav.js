import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <div>
        <div className="rounded sidebar border bg-white h-25">
          <h6 className="bg-sidebar p-2 fs-5 rounded font-color">
          PRODUCT CATEGORIES
          </h6>
          <ul className="list-unstyled">
            <div class="btn-group dropend d-flex justify-content-between">
              <button
                type="button"
                class="btn btn-white"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Switch & Sockets
              </button>
              <button
                type="button"
                class="btn btn-white dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span class="visually-hidden">Toggle Dropend</span>
              </button>

              <ul class="dropdown-menu">
                <div className=" mx-2 py-2">
                  <div className="d-flex justify-content-between">
                    <li className=""><Link to='/goldenmark' className="text-decoration-none text-black">Golden Mark Series  </Link></li>
                    <FontAwesomeIcon className="pt-1 ps-3" icon={faAngleRight} />
                  </div>
                  <hr />

                  <div className="d-flex justify-content-around">
                    <li><Link to='/whiterocker' className="text-decoration-none text-black">White Rocker Series</Link></li>

                    <FontAwesomeIcon className="pt-1 ps-3" icon={faAngleRight} />
                  </div>
                </div>
              </ul>
            </div>
            <hr />

            <div class="btn-group dropend d-flex justify-content-between">
              <button
                type="button"
                class="btn btn-white"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Circuit Breaker
              </button>
              <button
                type="button"
                class="btn btn-white dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span class="visually-hidden">Toggle Dropend</span>
              </button>

              <ul class="dropdown-menu">
                <div className="d-flex justify-content-between mx-2 pt-2">
                  <li className="">LED Light </li>
                  <FontAwesomeIcon className="pt-1" icon={faAngleRight} />
                </div>
              </ul>
            </div>

            <hr />

            <div class="btn-group dropend d-flex justify-content-between">
              <button
                type="button"
                class="btn btn-white"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                LED Light
              </button>
              <button
                type="button"
                class="btn btn-white dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span class="visually-hidden">Toggle Dropend</span>
              </button>

              <ul class="dropdown-menu">
                <div className="d-flex justify-content-between mx-2 pt-2">
                  <li className="">LED Light </li>
                  <FontAwesomeIcon className="pt-1" icon={faAngleRight} />
                </div>
              </ul>
            </div>

            <hr />
          </ul>
        </div>
    </div>
  )
}

export default SideNav