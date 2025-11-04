import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';


const StyledLogin = styled.div`
  #background-login {
    background-image: url(https://cafefcdn.com/203337114487263232/2024/6/27/120240627170707-1719532745757-17195327465481527432119.jpg);
    background-repeat: no-repeat;
    background-position: left;
    height: 1000px;
    background-size: contain;
    width: 100%;
    background-color:rgb(252, 248, 2);
  }
  .form-container {
    width: 500px;
    height: 500px;
    float: right;
    margin-right: 15%;
    text-align: center;
    background-color: white;
    margin-top: 70px;
  }

  .form-group {
    margin: 20px 0;
  }

  label {
    font-weight: bold;
  }

  input[type="text"],
  input[type="password"] {
    width: 70%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid gray;
    border-radius: 5px;
  }
  button[type="submit"] {
    width: 70%;
    padding: 10px;
    margin: 20px 0;
    background-color: #ee4d2d;
    color: white;
    border: none;
    cursor: pointer;
  }

  .hr1 {
    height: 1px;
    width: 100%;
    background-color: #dbdbdb;
    display: inline;
    align-items: center;
  }

  .hoac {
    color: #ccc;
    padding: 0 16px;
    text-transform: uppercase;
    font-size: 0.75rem;
  }
`;
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const naviate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      naviate("/home");
    }
  }, []);

  async function login(e) {
    e.preventDefault();
    console.log(username, password);

    let item = { username, password };
    let result = await fetch("http://localhost:8000/user", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result))
    naviate("/home")

  }
  return (
    <>
      <StyledLogin>
        <header className="bg-white">
          <div className="container">
            <div className="row p-4">
              <div className="col">
                <img
                  src="assets/logoshopee.png"
                  alt=""
                  className="img-fluid "
                />
                <div className="d-inline mt-3">
                  <p className="d-inline fs-4 fw-bold p-4 mt-3">Đăng Nhập</p>
                </div>
              </div>
              <div className="col">
                <p className="text-end mt-3" style={{ color: "#ee4d2d" }}>
                  Bạn cần giúp đỡ ?
                </p>
              </div>
            </div>
          </div>
        </header>
        <div id="background-login">
          <div className="form-container container-fluid">
            <div className="text-start fs-3 ms-5 mt-3">Đăng Nhập</div>
            <form id="login-form">
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Email/Số điện thoại/Tên Đăng Nhập"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Mật Khẩu"
                  onChange={(e) => setPassword(e.target.value)}

                />
              </div>
              <button className="btn btn-bg-danger" type="submit" onClick={login}>Đăng Nhập</button>
              <div className="row">
                <div className="col">
                  <small className="mx-5 text-primary">Quên mật khẩu</small>
                  <small className="mx-5 text-primary">
                    Đăng nhập bằng SMS
                  </small>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <hr style={{ flexGrow: 1 }} />
                  <small style={{ padding: "0 10px" }}>HOẶC</small>
                  <hr style={{ flexGrow: 1 }} />
                </div>
                <p className="d-inline">Bạn mới biết đến AppStore?</p>
                <a href="signup.html" className="text-decoration-none">
                  Đăng kí
                </a>
              </div>
            </form>
          </div>
        </div>
        <footer style={{ backgroundColor: "#fbfbfb" }}>
          <div className="container pt-5">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column">
                <strong className=" font-weight-bold">
                  CHĂM SÓC KHÁCH HÀNG
                </strong>
                <p className="mb-1 mt-2 desc">Trung Tâm Trợ Giúp</p>
                <p className="mb-1 desc">AppStore Blog</p>
                <p className="mb-1 desc">AppStore Mall</p>
                <p className="mb-1 desc">Hướng Dẫn Mua Hàng</p>
              </div>
              <div className="d-flex flex-column ml-5">
                <strong className=" font-weight-bold">VỀ AppStore</strong>
                <p className="mb-1 mt-2 desc ">Giới Thiệu Về AppStore Việt Nam</p>
                <p className="mb-1 desc">Tuyển Dụng</p>
                <p className="mb-1 desc">Điều Khoản AppStore</p>
                <p className="mb-1 desc">Chính Sách Bảo Mật</p>
              </div>
              <div className="d-flex flex-column ml-5">
                <strong className=" font-weight-bold">THANH TOÁN</strong>
                <div className="d-flex align-items-center">
                  <img
                    src="assets/thanhtoan.png"
                    alt=""
                    width="240px"
                    height="120px"
                    className="mt-3"
                  />
                </div>
                <strong className=" font-weight-bold mt-4">
                  ĐƠN VỊ VẬN CHUYỂN
                </strong>
                <div className="d-flex align-items-center">
                  <img
                    src="assets/vanchuyen.png"
                    alt=""
                    width="240px"
                    height="120px"
                    className="mt-3"
                  />
                </div>
              </div>
              <div className="d-flex flex-column ml-5">
                <strong className=" font-weight-bold">
                  THEO DÕI CHÚNG TÔI TRÊN
                </strong>
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mt-3 ">
                    <img src="/assets/images/logo_fb.png" width={20} height={20} alt="" />
                    <span className="desc ml-3">Facebook</span>
                  </div>
                  <div className="d-flex align-items-center mt-2">
                    <img
                      src="assets/images/instagram.png"
                      width={20}
                      height={20}
                      alt=""
                      className="bi bi"
                    />
                    <span className="desc ml-3">Instagram</span>
                  </div>
                  <div className="d-flex align-items-center mt-2">
                    <img src="assets/facec.png" width={20} height={20} alt="" />
                    
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column ml-5">
                <strong className=" font-weight-bold">
                  TẢI ỨNG DỤNG SHOPEE NGAY THÔI
                </strong>
                <div className="d-flex align-items-center mt-3">
                  <img src="assets/barcode.png" alt="" />
                  <div className="d-flex flex-column">
                    <img src="assets/goggle.png" alt="" />
                    <img src="assets/app.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div
              className="d-flex justify-content-between mt-5 pb-3"
              style={{ color: "#888" }}
            >
              <span className="fs-6">
                {" "}
                © 2024 Shopee. Tất cả các quyền được bảo lưu.{" "}
              </span>
              <span className="fs-6">
                Quốc gia &amp; Khu vực: Singapore | Indonesia | Đài Loan | Thái
                Lan | Malaysia | Việt Nam | Philipines |
              </span>
            </div>
          </div>
        </footer>
      </StyledLogin>
    </>
  );
};

export default Login;
