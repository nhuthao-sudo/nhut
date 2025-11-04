import React, { useState } from "react";
import { useCart } from "react-use-cart";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import Myconponent from "./Myconponent";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import styled from "styled-components";

const Shopcart = (props) => {
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  // state để lưu thông tin người dùng nhập
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const naviate = useNavigate();

  const handleCheckout = () => {
    const data = { name, address, phone, note, items };

    axios
      .post("http://localhost:8000/checkout", data)
      .then((response) => {
        console.log(response.data);
        // xử lý kết quả trả về
        naviate("/home");
        emptyCart();
        alert("Thanh toán thành công")
      })
      .catch((error) => {
        console.error(error);
        // xử lý lỗi
      });

    setShowModal(false);
  };

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
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <StyledHeader>
        <div className="header fixed-top">
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

      <div className="content mt-5" >
        <div className="container position-absolute top-50 start-50 translate-middle">
          <Container className="mt-5 position-absolute top-50 start-50 translate-middle" >
            <h1 className="text-center my-5 ">
              {isEmpty ? "Giỏ hàng trống" : "Sản phẩm trong giỏ hàng"}
            </h1>
            <Row className="justify-content-center">
              <Table responsive="sm" striped bordered hover className="mb-5">
                <tbody>
                  {items.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td>
                          <div
                            style={{
                              background: "white",
                              height: "8rem",
                              overflow: "hidden",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <div style={{ padding: ".5rem" }}>
                              <img
                                src={item.image}
                                style={{ width: "4rem" }}
                                alt={item.title}
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <h6
                            style={{
                              whiteSpace: "nowrap",
                              width: "14rem",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {item.title}
                          </h6>
                        </td>
                        <td>{item.price}VNĐ</td>
                        <td>Số Lượng {item.quantity}</td>
                        <td>
                          <Button
                            className="ms-2"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity - 1)
                            }
                          >
                            -
                          </Button>
                          <Button
                            className="ms-2"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </Button>
                          <Button
                            onClick={() => removeItem(item.id)}
                            variant="danger"
                            className="ms-3"
                          >
                            Xoá sản phẩm
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              {!isEmpty && (
                <Row
                  className="justify-content-center w-100"
                  style={{ position: "fixed", bottom: 0 }}
                >
                  <Col className="py-2">
                    <h4>Thành tiền: {cartTotal}0.000 VNĐ</h4>
                  </Col>
                  <Col className="py-2">
                    <Button variant="primary" onClick={() => setShowModal(true)}>
                      Thanh toán
                    </Button>
                  </Col>
                </Row>
              )}
            </Row>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Thông tin đặt hàng</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Họ và tên:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nhập họ tên của bạn"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formAddress">
                    <Form.Label>Địa chỉ:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nhập địa chỉ của bạn"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Số điện thoại:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nhập số điện thoại của bạn"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formNote">
                    <Form.Label>Ghi chú:</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Nhập ghi chú (nếu có)"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Đóng
                </Button>
                <Button variant="primary" onClick={handleCheckout}>
                  Thanh toán
                </Button>
              </Modal.Footer>
            </Modal>
          </Container>
        </div>
      </div>
    </>



  );
};

export default Shopcart;
