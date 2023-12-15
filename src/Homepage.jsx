import React from "react";
import img from "./Assets/image.webp"
import uparrow from "./Assets/arrow-up-right.svg"
import logo from "./Assets/logo.svg"
import Page1 from "./Page1";
export default function Homepage() {
  return (
    <>
    <div id="main">
      <div id="navbar">
     <div id="logo"><img src={logo} alt="" height={32} width={118}/></div>
     <div id="list">
      <ul>
        <li>Product</li>
        <li><select name="" id="" >
          <option value="">Compare</option>
          <option value="">Home</option>
        <option value="">Product</option>
        <option value="">About</option>
        <option value="">Pricing</option>
        <option value="">Contact</option>
        </select></li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
      </div>
     <div id="rightmostdiv"><div id="login"><p>Login</p></div>
     <div id="letstalk"><p>Let's Talk</p></div></div>
     </div>
     <Page1/>
    </div>
    </>
  )
}
