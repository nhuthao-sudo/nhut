import ProducHomeTTN from "../page_danhmuc/ProducHomeTTN";
import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FormControl, InputGroup } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import Myconponent from "../pages/Myconponent";
import axios from "axios";
import Dongho from "./Dongho";
import Danhmuc from "../pages/Danhmuc";

const StyledHome = styled.div`
  /* carousel */
  .content {
    position: relative;
    top: 130px;
    background-color: #e1e1e1;
  }

  .content .shape1 {
    position: absolute;
    left: 0;
    top: 0;
    transform: rotate(-90deg);
    top: 17px;
    left: 20px;
  }
  .content .shape2 {
    position: absolute;
    left: -3px;
    top: -3px;
  }
  .content .shape3 {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }
  .content .shape4 {
    position: absolute;
    transform: rotate(90deg);
    right: 17px;
    top: 20px;
  }

  .wrap-carousel {
    height: 250px;
    position: relative;
    top: 30px;
    z-index: 2;
  }

  .carousel-indicators li {
    border: 0;
    border-radius: 20px;
    width: 10px;
    height: 10px;
  }

  /* jenis sale */

  .jenis-sale {
    padding: 20px;
    background-color: #ffffff;
    margin-top: 60px;
  }

  .jenis-sale p {
    font-size: 14px;
  }
  .wrap-img {
    border-radius: 12px;
    width: 50px;
    height: 50px;
    position: relative;
    border: 1px solid #888;
    padding: 5px;
  }

  .wrap-img img {
    width: 100%;
    height: 100%;
  }

  /* KATEGORY */
  .kategory {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
  }

  .kategory h5 {
    color: #8e8e8e;
    font-weight: 500;
  }

  .kategory p {
    font-size: 14px;
  }

  .card-kategory {
    padding: 10px 5px;
    width: 10%;
    height: 140px;
    border: 1px solid #f4f4f4;
  }

  .card-kategory .wrap-img {
    width: 80px;
    height: 80px;
    background-color: #ffffff;
    border-radius: 20px;
    border: none;
  }

  /* sale */
  .sale {
    background-color: #ffffff;
    /* padding: 13px; */
    flex-direction: column;
    padding-bottom: 20px;
  }
  .sale h5 {
    color: #f53d2d;
  }

  .sale span {
    background-color: black;
    color: #fff;
    font-weight: bold;
    padding: 0 5px;
  }

  .sale .diskon span {
    background-color: transparent;
  }

  .diskon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
    background-color: rgba(255, 212, 36, 0.9);
    width: 60px;
    height: 60px;
  }

  .total {
    position: absolute;
    bottom: 0;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .text span {
    background-color: #ffffff;
    color: #f53d2d;
    font-size: 20px;
    padding: 0;
    font-weight: 400;
  }

  .text span:first-child {
    font-size: 14px;
    font-weight: 400;
  }

  .progresss {
    left: 0;
    width: 90%;
    border-radius: 12px;
    background-color: #ff000057;
    display: flex;
    height: 20px;
    position: relative;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .progress-on {
    background-color: red;
    position: absolute;
    left: 0;
    top: 0;
    width: 75%;
    z-index: 6;
    height: 100%;
  }
  .progresss span {
    background-color: transparent;
    color: #ffffff;
    font-size: 12px;
    position: relative;
    z-index: 7;
    font-weight: 100;
  }

  .row-card {
    height: 250px;
    border-top: 1px solid #9b9b9b7a;
  }

  .wrap-img-sale {
    height: 70%;
    width: 80%;
    position: relative;
  }

  /* pencarian populer */
  .card-pencarian {
    width: 20%;
    border-top: 1px solid #d0d0d0;
    border-right: 1px solid #d0d0d0;
    border-left: 1px solid #d0d0d0;
  }

  .card-pencarian span {
    font-size: 14px;
  }

  /* rekomendasi */
  .nav-link.active {
    border-bottom: 3px solid #f53d2d !important;
  }import Thoitrangnu from './Thoitrangnu';

`;
const StyledHeader = styled.div`
  body {
    background-color: #e1e1e1;
  }
  a {
    text-decoration: none;
    color: white;
  }

  .header {
    background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
    height: 150px;
    width: 100%;
    position: fixed;
    color: #ffffff;
    padding-top: 10px;
    z-index: 999;
  }

  .container {
    max-width: 1200px;
    padding: 0;
  }

  .navbar {
    padding: 0;
  }

  .navbar span {
    font-size: 14px;
  }

  .icon-media {
    width: 17px;
    height: 17px;
  }

  .hr1 {
    width: 1px;
    height: 15px;
    background-color: #ffffff;
  }

  .wrap-search {
    position: relative;
    width: 100%;
    height: 40px;
    background-color: #ffffff;
    border-radius: 6px;
  }

  .wrap-icon-s {
    position: absolute;
    background: linear-gradient(-180deg, #f53d2d, #f63);
    border-radius: 3px;
    width: 60px;
    height: 87%;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form-control {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border: none;
    background-color: transparent;
  }

  .form-control:focus {
    box-shadow: none;
    border-radius: 6px;
  }

  .icon-shop {
    width: 30px;
    height: 30px;
    margin-left: 60px;
  }

  .brand-img {
    width: 45px;
    height: 55px;
  }

  .text-brand {
    font-size: 30px;
    font-weight: 400;
  }

  .under-input span {
    font-size: 12px;
    font-weight: 100;
  }

  .wrap-navbar-input {
    margin-left: 50px;
    width: 67%;
  }
`;

const HomeThoitrangnu = () => {
  const [productData, setProductData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const [imageURL1, setImageURL1] = useState("");
  const [imageURL2, setImageURL2] = useState("");
  const [imageURL3, setImageURL3] = useState("");
  const [imageURL4, setImageURL4] = useState("");
  const [imageURL5, setImageURL5] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/QCimg/1")
      .then((response) => {
        setImageURL1(response.data.image);
      })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/QCimg/2")
      .then((response) => {
        setImageURL2(response.data.image);
      })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/QCimg/3")
      .then((response) => {
        setImageURL3(response.data.image);
      })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/QCimg/4")
      .then((response) => {
        setImageURL4(response.data.image);
      })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/QCimg/5")
      .then((response) => {
        setImageURL5(response.data.image);
      })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((response) => {
        const data = response.data.filter(
          (item) => item.category === "thoitrangnam"
        );
        setProducts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <StyledHeader>
        <div className="header">
          <div className="container">
            {/* navbar  */}
            <nav className="navbar d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <span>Tải ứng dụng</span>
                <div className="hr1 mx-2" />
                <span className="me-2">Kết nối</span>
                <img
                  className="icon-media me-2 ml-2"
                  src={`${process.env.PUBLIC_URL}/assets/images/logo_fb.png`}
                  alt=""
                />
                <img
                  className="icon-media me-2"
                  src={`${process.env.PUBLIC_URL}/assets/images/logo_ig.png`}
                  alt=""
                />
                <img
                  className="icon-media me-2"
                  src={`${process.env.PUBLIC_URL}/assets/images/logo_yt.png`}
                  alt=""
                />
                <img
                  className="icon-media me-2"
                  src={`${process.env.PUBLIC_URL}/assets/images/line.png`}
                  alt=""
                />
              </div>
              <div className="d-flex align-items-center">
                <img
                  className="icon-media me-2"
                  src={`${process.env.PUBLIC_URL}/assets/images/logo_tb.jpg`}
                  alt=""
                />
                <span className="me-2">Thông báo</span>
                <img
                  className="icon-media me-2"
                  src={`${process.env.PUBLIC_URL}/assets/images/logo_help.jpg`}
                  alt=""
                />
                <span className="me-4">Hỗ trợ</span>
                <NavLink to={"/login"} className="nav-link">
                  Đăng nhập
                </NavLink>
                <div className="hr1 mx-2" />
                <NavLink to={"/signup"} className="font-weight-bold">
                  Đăng kí
                </NavLink>
              </div>
            </nav>
            {/* input search brand */}
            <div className="d-flex align-items-center mt-4">
              <NavLink className="d-flex align-items-center" to={"/home"}>
                <img
                  className="brand-img mr-2"
                  src={`${process.env.PUBLIC_URL}/assets/images/logo_gau.png`}
                  alt=""
                />
                <span className="text-brand">AppStore</span>
              </NavLink>
              <div className="wrap-navbar-input">
                <div>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>
                      <BiSearch size="2rem" />
                    </InputGroup.Text>
                    <FormControl
                      placeholder="Nhanh tay săn voucher lên đến 50%"
                      className="bg-white"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                  </InputGroup>
                </div>

                <div className="under-input d-inline mt-2">
                  <span className="me-2">SamSung</span>
                  <span className="me-2">Iphone</span>
                  <span className="me-2">Sony</span>
                  <span className="me-2">Xiaomi</span>
                  <span className="me-2">Sony</span>
                  <span className="me-2">Honor</span>
                  <span className="me-2">Huawei</span>
                  <span className="me-2">Asus</span>
                  <span className="me-2">Oppo</span>
                </div>
              </div>

              <NavLink to={"/shopcart"}>
                {/* //cart */}
                <Myconponent />
                {/* <Myconponent />
                <img
                  className="icon-shop"
                  src={`${process.env.PUBLIC_URL}/assets/images/shop.png`}
                  alt=""
                /> */}
              </NavLink>
            </div>
          </div>
        </div>
      </StyledHeader>
      <StyledHome>
        <div className="content">
          <img
            className="shape1"
            src={`${process.env.PUBLIC_URL}/assets/images/shape1.png`}
            alt=""
          />
          <img
            className="shape2"
            src={`${process.env.PUBLIC_URL}/assets/images/shape2.png`}
            alt=""
          />
          <img
            className="shape3"
            src={`${process.env.PUBLIC_URL}/assets/images/shape1.png`}
            alt=""
          />
          <img
            className="shape4"
            src={`${process.env.PUBLIC_URL}/assets/images/shape2.png`}
            alt=""
          />
          <div className="container">
            {/* carousel */}
            <div className="row wrap-carousel">
              <div className="col-8 h-100 pr-1">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide h-100"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={0}
                      className="active"
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={1}
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={2}
                    />
                  </ol>
                  <div className="carousel-inner h-100">
                    <div className="carousel-inner h-100">
                      <div className="carousel-item active h-100">
                        {/* quangcao */}
                        <img
                          src={imageURL1}
                          className="d-block w-100 h-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item h-100">
                        <img
                          src={imageURL2}
                          className="d-block w-100 h-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item h-100">
                        <img
                          src={imageURL3}
                          className="d-block w-100 h-100"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only" />
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only" />
                  </a>
                </div>
              </div>
              <div className="col-4 h-100 pl-0">
                <div className="h-50">
                  <img className="w-100 h-100" src={imageURL4} alt="" />
                </div>
                <div className="h-50 pt-1">
                  <img className="w-100 h-100" src={imageURL5} alt="" />
                </div>
              </div>
            </div>
            {/* Phần Danh Mục  */}
            <Danhmuc />
            {/* Kết Thúc Danh Mục */}
            <Dongho />
          </div>
        </div>
      </StyledHome>
    </>
  );
};

export default HomeThoitrangnu;
