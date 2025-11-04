import React, { useState } from "react";
import "./../admin_containers/header.css";
import "./../admin_containers/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import SearchFilter from "react-filter-search";
import { Row } from "react-bootstrap";
import ProductListCard from "./ProducListCard";
import Menu from "./Menu";

const ProductAdmniList = (props) => {
  const [productData, setProductData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  async function getResponse() {
    const res = await fetch("http://localhost:8000/products").then((res) =>
      res.json()
    );

    setProductData(await res);
  }

  useEffect(() => {
    getResponse();
  }, []);
  return (
    <>
      <div id="page-top">
        {/* Page Wrapper */}
        <div id="wrapper">

          <Menu />

          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              {/* Topbar */}
              <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/* Sidebar Toggle (Topbar) */}
                <button
                  id="sidebarToggleTop"
                  className="btn btn-link d-md-none rounded-circle mr-3"
                >
                  <i className="fa fa-bars" />
                </button>
                {/* Topbar Search */}
                <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-light border-0 small"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm" />
                      </button>
                    </div>
                  </div>
                </form>
                {/* Topbar Navbar */}
                <ul className="navbar-nav ml-auto">
                  {/* Nav Item - Search Dropdown (Visible Only XS) */}
                  <li className="nav-item dropdown no-arrow d-sm-none">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#/"
                      id="searchDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-search fa-fw" />
                    </a>
                    {/* Dropdown - Messages */}
                    <div
                      className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                      aria-labelledby="searchDropdown"
                    >
                      <form className="form-inline mr-auto w-100 navbar-search">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control bg-light border-0 small"
                            placeholder="Search for..."
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              <i className="fas fa-search fa-sm" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>

                  <div className="topbar-divider d-none d-sm-block" />
                  {/* Nav Item - User Information */}
                  <li className="nav-item dropdown no-arrow">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/#"
                      id="userDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                        Quản Trị
                      </span>
                      <img
                        className="img-profile rounded-circle"
                        src={`${process.env.PUBLIC_URL}/backend/images/logo.png`}
                        alt="avata"
                      />
                    </a>
                    {/* Dropdown - User Information */}
                    <div
                      className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="userDropdown"
                    >
                      <a className="dropdown-item" href="/#">
                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                        Hoạt Động Đăng Nhập
                      </a>
                      <div className="dropdown-divider" />
                      <NavLink
                        className="dropdown-item"
                        to={"/Layout"}
                        data-toggle="modal"
                        data-target="#logoutModal"
                      >
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                        Đăng xuất
                      </NavLink>
                    </div>
                  </li>
                </ul>
              </nav>
              {/* End of Topbar */}
              {/* Begin Page Content */}
              <div className="container-fluid">
                <h1 className="text-center text-primary">Chỉnh Sửa Sản Phẩm</h1>

                <table className="table">
                  <thead>

                    <th>STT</th>
                    <th>Hình ảnh</th>
                    <th>Tên</th>
                    <th>Giá</th>
                    <th>Sửa</th>
                    <th>Xóa</th>

                  </thead>


                  <SearchFilter
                    value={searchInput}
                    data={productData}
                    renderResults={(results) => (
                      <tbody >
                        {results.map((item, i) => (
                          <ProductListCard data={item} key={i} />
                        ))}
                      </tbody>
                    )}
                  ></SearchFilter>

                </table>
              </div>
              {/* /.container-fluid */}
            </div>
            {/* End of Main Content */}
            {/* Footer */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright © Your Website</span>
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
};

export default ProductAdmniList;
