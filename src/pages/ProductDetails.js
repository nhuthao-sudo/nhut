import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";
import Lightbox from "react-lightbox-component";
import "react-lightbox-component/build/css/index.css";
import "./product-details.css";
import { useCart } from "react-use-cart";
import { BsCartPlus } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { BiSearch } from "react-icons/bi";
import Myconponent from "./Myconponent";
const ProductDetails = (props) => {
  const [productData, setProductData] = useState([]);
  const [img, setImg] = useState([]);
  const { addItem } = useCart();
  const { productId } = useParams();

  useEffect(() => {
    getResponse(productId);
    getResponseimg(productId);
  }, [productId]);

  const getResponse = async (productId) => {
    const res = await fetch(`http://localhost:8000/products/${productId}`).then(
      (res) => res.json()
    );
    setProductData(await res);
  };
  const getResponseimg = async (productId) => {
    const res = await fetch(
      `http://localhost:8000/imgProducDistel/${productId}`
    ).then((res) => res.json());
    setImg(await res);
  };
  const addToCart = (item) => {
    addItem(item);
  };


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
  }
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

  const [searchInput, setSearchInput] = useState("");
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
                <Link to={"/login"} className="nav-link">
                  Đăng nhập
                </Link>
                <div className="hr1 mx-2" />
                <Link to={"/signup"} className="font-weight-bold">
                  Đăng kí
                </Link>
              </div>
            </nav>
            {/* input search brand */}
            <div className="d-flex align-items-center mt-4">
              <Link className="d-flex align-items-center" to={"/home"}>
                <img
                  className="brand-img mr-2"
                  src={`${process.env.PUBLIC_URL}/assets/images/logo_gau.png`}
                  alt=""
                />
                <span className="text-brand">AppStore</span>
              </Link>
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
                  <span className="me-2">Honor</span>
                  <span className="me-2">Huawei</span>
                  <span className="me-2">Asus</span>
                  <span className="me-2">Oppo</span>
                </div>
              </div>

              <Link to={"/shopcart"}>
                {/* //cart */}
                <Myconponent />
                {/* <Myconponent />
                <img
                  className="icon-shop"
                  src={`${process.env.PUBLIC_URL}/assets/images/shop.png`}
                  alt=""
                /> */}
              </Link>
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
          <div className="container" style={{ backgroundColor: 'white' }}>
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
            <Container className="py-5">
              <Row className="justify-content-center mt-5">
                <Col xs={10} md={7} lg={5} className="p-0">
                  <Lightbox
                    images={[
                      {
                        src: productData.image,
                        title: productData.title,
                        description: "img 1",
                      },
                      {
                        src: img.img1,
                        title: productData.title,
                        description: "img 2",
                      },
                      {
                        src: img.img2,
                        title: productData.title,
                        description: "img 3",
                      },
                      {
                        src: img.img3,
                        title: productData.title,
                        description: "img 4",
                      },
                    ]}
                  />
                </Col>
                <Col xs={10} md={7} lg={7}>
                  <h4>{productData.title}</h4>
                  <b className="h6 d-block mt-3" style={{ color: '#ee4d2d' }}>4.4 ⭐⭐⭐⭐⭐</b>

                  <br />
                  <h4 style={{ color: '#ee4d2d' }}>{productData.price} VNĐ</h4>
                  <p className="d-inline" style={{ color: '#757575' }}>Vận chuyển:</p><span className="d-inline ms-4"><img src={`${process.env.PUBLIC_URL}/assets/vanchuyenn.png`} alt="" style={{ width: '30px' }} />  Miễn phí vận chuyển</span>

                  <p className="mt-3 h6" style={{ opacity: "0.8", fontWeight: "400" }}>
                    {productData.description}
                  </p>
                  <Button
                    onClick={() => addToCart(productData)}
                    style={{ borderRadius: "0", border: '1px solid #ee4d2d', color: '#ee4d2d', backgroundColor: '#fff5f1' }}
                    className="mt-3"
                  >
                    <BsCartPlus size="1.8rem" />
                    Thêm Vào Giỏ Hàng
                  </Button>
                </Col>
              </Row>
            </Container>
            {/* Kết Thúc Danh Mục */}


          </div>
        </div>
      </StyledHome>
    </>

  );
};

export default ProductDetails;
