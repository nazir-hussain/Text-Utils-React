import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
    <footer>
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Nazir Hussain | All rights reserved |
            Terms Of Service | Privacy
          </p>
    </footer>
    </>
  );
}

export default Footer;
