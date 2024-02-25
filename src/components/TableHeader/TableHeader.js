import {
  faAngleDown,
  faAngleRight,
  faBars,
  faBed,
  faBullhorn,
  faChargingStation,
  faChildReaching,
  faGifts,
  faPercent,
  faPerson,
  faPersonDress,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const TableHeader = () => {
  return (
    <>
      <table className=" w-100 d-flex container">
        <tr className="border py-3 w-50 d-flex justify-content-around bg-color text-white align-items-center ">
          {/* <FontAwesomeIcon icon={faBars} /> */}
          {/* <th>BROWSE CATEGORIES</th> */}
          <th>
            {/* <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Link
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              
            </ul> */}
            <li class="nav-item dropdown list-unstyled text-decoration-none ">
              <a
                class="nav-link "
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faBars} />
                <span className="px-5 fw-bold">Dropdown</span>
                <FontAwesomeIcon icon={faAngleDown} />
              </a>
              <ul class="dropdown-menu list-unstyled mt-2">
                <li>
                  <a class="dropdown-item" href="#">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-bold">
                        <FontAwesomeIcon
                          icon={faPerson}
                          className="pe-1 fw-bold"
                        />
                        Men
                      </span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </a>
                </li>

                <li>
                  <hr class="dropdown-divider" />
                </li>

                <li className="custom">
                  <a class="dropdown-item" href="#">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-bold">
                        <FontAwesomeIcon icon={faPersonDress} />
                        Women
                      </span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </a>
                </li>

                <li>
                  <hr class="dropdown-divider" />
                </li>

                <li>
                  <a class="dropdown-item" href="#">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-bold">
                        <FontAwesomeIcon icon={faChildReaching} />
                        Baby & Kids
                      </span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </a>
                </li>

                <li>
                  <hr class="dropdown-divider" />
                </li>

                <li>
                  <a class="dropdown-item" href="#">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-bold">
                        <FontAwesomeIcon icon={faChargingStation} />
                        Electronics
                      </span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </a>
                </li>

                <li>
                  <hr class="dropdown-divider" />
                </li>

                <li>
                  <a class="dropdown-item" href="#">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-bold">
                        <FontAwesomeIcon icon={faBed} />
                        Home & Living
                      </span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </a>
                </li>

              </ul>
            </li>
          </th>
        </tr>

        <tr className="border py-2  w-100 d-flex justify-content-center align-items-center">
          <td className="font-color fw-bold">
            <span className="px-3">
              <FontAwesomeIcon className="pe-1" icon={faShop} />
              SHOP
            </span>
          </td>
          <td>
            <span className="pe-3 fw-bold">
              <FontAwesomeIcon className="pe-1" icon={faPercent} />
              OFFER & DISCOUNT
            </span>
          </td>
          <td>
            <span className="pe-3 fw-bold">
              <FontAwesomeIcon className="pe-1" icon={faGifts} />
              GIFT CART
            </span>
          </td>
          <td className="fw-bold">
            <FontAwesomeIcon className="pe-1 " icon={faBullhorn} />
            MEGA OFFER
          </td>
        </tr>
        <tr className="border py-2 w-50  d-flex justify-content-center align-items-center">
          <th>HOTLINE: 01403926378</th>
        </tr>
      </table>
    </>
  );
};

export default TableHeader;
