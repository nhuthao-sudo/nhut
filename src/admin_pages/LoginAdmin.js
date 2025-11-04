import React, { useState } from "react";
import Input from "./../user_components/Input";
import "./../admin_pages/login.css";

function LoginAdmin(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Gửi yêu cầu đăng nhập đến máy chủ
    props.onSubmit(username, password);
  };

  return (
    <div >
      <div className="container position-absolute top-50 start-50 translate-middle " id="">
      <div className="row  justify-content-center" id="canchinh">
        <div className="datgoldshop-main col-lg-6 col-md-6">
          <div className="row">
            <div className="col">
              <h2 className="text-center">Administrator</h2>
              <form action method="post" onSubmit={handleSubmit}>
                <Input
                  id="ten_dn"
                  placeholder="Nhập Tên Đăng Nhập"
                  value={username}
                  onChange={handleUsernameChange}
                />
                <Input
                  id="pass_dn"
                  type="password"
                  placeholder="Nhập Password"
                  value={password}
                  onChange={handlePasswordChange}
                />

                <div className="row mt-3" id="quennho">
                  <div className="col-6">
                    <span>
                      <input type="checkbox" />
                      Nhớ Tài Khoản
                    </span>
                  </div>
                  <div className="col-6">
                    <h6>
                      <a href="/#">Quên Mật Khẩu?</a>
                    </h6>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col text-center ">
                    <button type="submit" className="btn text-white fw-bold">
                      Đăng Nhập
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default LoginAdmin;
