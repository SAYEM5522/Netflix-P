import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [show, Setshow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // if(window.scrollY>100){
      //     Setshow(true);
      // }else{
      //     Setshow(false);
      // }
      window.scrollY > 90 ? Setshow(true) : Setshow(false);
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt=""
      />
      <img
        className="nav__avator"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt=""
      />
    </div>
  );
}

export default Nav;
