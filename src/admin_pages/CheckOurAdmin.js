import React, { useState } from "react";
import "./../admin_containers/header.css";
import "./../admin_containers/fontawesome-free/css/all.min.css";
import LoginAdmin from "./../admin_pages/LoginAdmin";
import { NavLink } from "react-router-dom";
import ProductAdminList from "./../admin_pages/ProductAdminList";
import Checkout from './CheckOur';
import Menu from "./Menu";
import Headerchung from "./Headerchung";

function Header(props) {
 
    return (
      <>
        <div id="page-top">
          {/* Page Wrapper */}
          <div id="wrapper">
           <Menu/>
            <div id="content-wrapper" className="d-flex flex-column">
              {/* Main Content */}
              <div id="content">
              
                {/* Phần Hearder */}

                <Headerchung/>
                {/* Kết thúc Hearder */}

                <div className="container-fluid">
                    <Checkout/>
                </div>
                {/* /.container-fluid */}
              </div>
              {/* End of Main Content */}
              {/* Footer */}
              <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                  <div className="copyright text-center my-auto">
                    <span>Copyright © Your Website </span>
                  </div>
                </div>
              </footer>
              {/* End of Footer */}
            </div>
            {/* End of Content Wrapper */}
          </div>
          {/* End of Page Wrapper */}
        </div>
      </>
    );
    
  
}

export default Header;
