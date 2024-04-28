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
            <th>
              <li class="nav-item dropdown list-unstyled text-decoration-none ">
                <div
                  class="nav-link w-100"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faBars} />
                  <span className="px-sm-1 px-5 fw-bold ">
                    Browse Categories
                  </span>
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
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
      

       
          <tr className=" border-lg-1 py-2  side-bar w-100 d-flex justify-content-center align-items-center">
            <td className="font-color fw-bold">
              <div className="px-3 side-bar">
                <FontAwesomeIcon className="pe-1" icon={faShop} />
                SHOP
              </div>
            </td>
            <td>
              <div className="pe-3 side-bar fw-bold">
                <FontAwesomeIcon className="pe-1" icon={faPercent} />
                OFFER & DISCOUNT
              </div>
            </td>
            <td>
              <div className="pe-3 fw-bold side-bar">
                <FontAwesomeIcon className="pe-1" icon={faGifts} />
                GIFT CART
              </div>
            </td>
            <td className="fw-bold  side-bar">
              <FontAwesomeIcon className="pe-1 " icon={faBullhorn} />
              MEGA OFFER
            </td>
          </tr>
          <tr className="border py-2 w-50  side-bar  d-flex justify-content-center align-items-center">
            <th className=" side-bar">HOTLINE: 01317424004</th>
          </tr>
      </table>
    </>
  );
};

export default TableHeader;
