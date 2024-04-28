import "./Footer.css";
import {
  faLocationDot,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import i1 from "../../../assets/Bkash-logo.png";
import i2 from "../../../assets/nagad.png";
import i3 from "../../../assets/rocket.png";
import i4 from "../../../assets/Dutch_Bangla_Bank.jpg";
import i5 from "../../../assets/visa-icon.png";
import i6 from "../../../assets/master-card.png";

const Footer = () => {
  return (
    <div className="bg-success">
      <div className=" d-flex justify-content-around py-5">
        <div>
          <h2 class="fs-1 fw-bold" aria-current="page">
            Smart<span className="font-color">Bazar</span>
          </h2>
          <br />
          <p className="text-white">SmartBazar is a sample e-commerce website</p>
          <p className="text-white">
            <FontAwesomeIcon icon={faLocationDot} /> Dhaka, Bangladesh
          </p>
          <p className="text-white">
            <FontAwesomeIcon icon={faMobileScreen} /> Phone: 01317424004
          </p>
        </div>

        <div>
          <h6>Payment</h6>
          <div className="d-flex w-100 gap-2 rounded">
            <img src={i1} className=" logo-sizing rounded " alt="im" />
            <img src={i2} className=" logo-sizing rounded " alt="im" />
            <img src={i3} className=" logo-sizing rounded " alt="im" />
            <img src={i4} className=" logo-sizing rounded " alt="im" />
            <img src={i5} className=" logo-sizing rounded " alt="im" />
            <img src={i6} className=" logo-sizing rounded " alt="im" />
          </div>
        </div>

        <div>
          <h6 className="text-white">USER AREA</h6>
          <ul className="list-unstyled">
            <li>My Account</li>
            <li>Cart</li>
            <li>Wishlist</li>
          </ul>
        </div>

        <div>
          <h6 className="text-white">INFORMATION</h6>
          <ul className="list-unstyled">
            <li>Information</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h6 className="text-white">GUIDE AND HELP</h6>
          <ul className="list-unstyled">
            <li>Career</li>
            <li>Order Returns</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
      <hr className="text-white"/>
      <p className="text-center text-white">
        <i>Copyright © 2024 SmartBazar. All Rights Reserved.</i>
      </p>
    </div>
  );
};

export default Footer;
