import React, { useState } from "react";
import "./../admin_containers/header.css";
import "./../admin_containers/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import SearchFilter from "react-filter-search";
import { Button, Form, Modal, Row } from "react-bootstrap";
import ProductListCard from "./ProducListCard";
import EditQc from "./EditQc";
import Menu from "./Menu";
import Headerchung from "./Headerchung";

const ProductAdmniList = (props) => {
  const [productData, setProductData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showEditPopup, setShowEditPopup] = useState(false);

  // xử lý thêm quảng cáo
  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Lấy giá trị từ input
    const id = event.target.formTitle.value;
    const image = event.target.formImage.value;
  
    // Tạo đối tượng mới
    const newQCImg = {
      id: id,
      image: image,
    };
  
    // Gửi request POST đến địa chỉ http://localhost:8000/QCimg
    fetch('http://localhost:8000/QCimg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newQCImg),//chuyển đối tượng thành chuỗi
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        handleCloseEditPopup();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  // kết thúc xử lý thêm quảng cáo

  const handleEditProduct = () => {
    setShowEditPopup(true);
  };

  const handleCloseEditPopup = () => {
    setShowEditPopup(false);
  };
  async function getResponse() {
    const res = await fetch("http://localhost:8000/QCimg").then((res) =>
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
      <Menu/>
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
             <Headerchung/>
              <div className="container-fluid">
                <h1 className="text-center text-primary">Chỉnh Sửa Quảng Cáo</h1> 
                <Button className="text-end mb-4 float-end" onClick={handleEditProduct} >Add Quảng Cáo</Button>
                <table className="table">
        <thead>
   
            <th>STT</th>
            <th>Hình ảnh</th>
            <th>Sửa</th>
            <th>Xóa</th>
         
        </thead>
                <SearchFilter
                  value={searchInput}
                  data={productData}
                  renderResults={(results) => (
                    <tbody className="text-center">
                      {results.map((item, i) => (
                        <EditQc data={item} key={i} />
                      ))}
                    </tbody>
                  )}
                ></SearchFilter>
                  </table>
              </div>
              {/* /.container-fluid */}
            </div>
            {/* Thêm quảng cáo */}
            <Modal show={showEditPopup} onHide={handleCloseEditPopup}>
  <Modal.Header closeButton>
    <Modal.Title>Thêm Quảng Cáo</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label>ID</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter id"
          name="formTitle"
          required
        />
      </Form.Group>

      <Form.Group controlId="formImage">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter image URL"
          name="formImage"
          required
        />
      </Form.Group>

      <Button variant="secondary" onClick={handleCloseEditPopup}>
        Close
      </Button>
      <Button variant="primary" type="submit">
        Thêm Quảng Cáo
      </Button>
    </Form>
  </Modal.Body>
</Modal>
            {/* Kết thúc thêm quảng cáo */}
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
};

export default ProductAdmniList;
