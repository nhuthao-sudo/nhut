import React from 'react'
import  styled  from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StyledSignin = styled.div` 
#background-login{
    background-image:url(https://cafefcdn.com/203337114487263232/2024/6/27/120240627170707-1719532745757-17195327465481527432119.jpg);
    background-repeat: no-repeat;
    background-position:left;
    height: 1000px;
    background-size: contain;
    width: 100%;
    background-color:rgb(252, 248, 2);
    }
    
    /* form{
        margin-right: 250px;
        margin-top:50px ;
        width: 500px;
        height: 500px;
    }
    
    button{
        background-color: #ee4d2d;
        color: white;
    } */
    
    .form-container {
        width: 500px;
        height: 800px;
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
    
      .hr1{
        height: 1px;
    width: 100%;
    background-color: #dbdbdb;
    display: inline;
    align-items: center;
      }
    
      .hoac{
        color: #ccc;
    padding: 0 16px;
    text-transform: uppercase;
    font-size: .75rem;
      }
`;

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:8000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, user, address, phone }),
    });
    const data = await response.json();
    alert("đăng kí thành công");
    navigate("/login");
    console.log(data);
  };

  return (
    <>
    <StyledSignin>
    <div>
  <header className='bg-white'>
    <div className="container">
      <div className="row p-4">
        <div className="col">
          <img src="assets/logoshopee.png" alt="" className="img-fluid " />
          <div className="d-inline mt-3">
            <p className="d-inline fs-4 fw-bold p-4 mt-3">Đăng Kí</p>
          </div>
        </div>
        <div className="col">
          <p className="text-end mt-3" style={{color: '#ee4d2d'}}>Bạn cần giúp đỡ ?</p>
        </div>
      </div>
    </div>
  </header>
  <div id="background-login">
    <div className="form-container container-fluid">
      <div className="text-start fs-3 ms-5 mt-3">Đăng Kí</div>
      <form id="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="username" id="username" placeholder="Email/Số điện thoại/Tên Đăng Nhập" value={username} onChange={handleUsernameChange}/>
        </div>
        <div className="form-group">
          <input type="password" name="password" id="password" placeholder="Mật Khẩu"  value={password} onChange={handlePasswordChange} />
        </div>
        <div className="form-group">
          <input type="text" name="nameUser" id="nameUser" placeholder="Tên khách hàng"  value={user} onChange={handleUserChange} />
        </div>
        <div className="form-group">
          <input type="text" name="addres" id="address" placeholder="Địa chỉ"  value={address} onChange={handleAddressChange}/>
        </div>
        <div className="form-group">
          <input type="text" name="phone" id="telphone" placeholder="Số điện thoại"  value={phone} onChange={handlePhoneChange} />
        </div>
        <div className="form-group">
          <label htmlFor="avatar">Ảnh đại diện: </label>
          <input type="file" name="avatar" id="avatar" />
        </div>
        <button type='submit' className='btn'>Đăng kí</button>
      </form>
    </div>
  </div>
</div>
    </StyledSignin>
        

    </>
  );
}

export default Signup