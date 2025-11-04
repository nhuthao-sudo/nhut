import React, { useState } from "react";
import "./../admin_containers/header.css";
import "./../admin_containers/fontawesome-free/css/all.min.css";
import LoginAdmin from "./../admin_pages/LoginAdmin";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Menu from "./Menu";
import Headerchung from "./Headerchung";

function AddProduct(props) {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [rate, setRate] = useState(0);
  const [count, setCount] = useState(0);

  const handleAddProduct = () => {
    const newProduct = {
      id: parseInt(id),
      title,
      price: parseInt(price),
      description,
      category,
      image,
      rating: { rate: parseInt(rate), count: parseInt(count) },
    };
    const newImg = {
      img1,
      img2,
      img3,
    };
    setTitle("");
    setPrice("");
    setDescription("");
    setCategory("");
    setImage("");
    setImg1("");
    setImg2("");
    setImg3("");
    setRate("");
    setCount("");
    delete newProduct.createdAt;
    delete newProduct.modifiedAt;
    axios
      .post("http://localhost:8000/products", newProduct)
      .then((response) => {
        console.log(response.data);
        props.onAddProduct(newProduct);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .post("http://localhost:8000/imgProducDistel", newImg)
      .then((response) => {
        console.log(response.data);
        props.onAddProduct(newImg);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div id="page-top">
        {/* Page Wrapper */}
        <div id="wrapper">
            {/* menu */}
              <Menu/>
            {/* kết thúc menu */}


          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
            <Headerchung/>
              <div className="container-fluid">
                <div className="ms-5">
                  <div>
                    <h3 className="h1 text-center text-primary ">Thêm Sản Phẩm Mới</h3>
                      <div className="row justify-content-center">
                        <div className="col-lg-8">
                          <div className="row">
                            <div className="col">
                            <from>
                      <label>Tên sản phẩm:</label>
                      <input
                        className="form-control w-100"
                        required
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <br />
                      <label>Giá:</label>
                      <input
                      required
                        className="form-control  w-100"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                      <br />
                      <label>Mô tả:</label>
                      <textarea
                      required
                        className="form-control  w-100"
                        rows={10} cols={100}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      <br />
                      <label>Danh mục:</label>
                      <select
                        className="form-control  w-100"
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="">-- Chọn Danh Mục --</option>
                        <option value="thoitrangnam">SamSung</option>
                        <option value="thoitrangnu">Iphone</option>
                        <option value="dienthoai">Sony</option>
                        <option value="thietbidientu">Xiaomi</option>
                        <option value="mayanh">Honor</option>
                        <option value="dongho">Huawei</option>
                        <option value="giaydepnam">Asus</option>
                        <option value="thietbigiadung">
                          Oppo
                        </option>
                        <option value="thethao">Realme</option>
                        <option value="xemay">Vivo</option>
                      </select>

                      <br />
                      <label>Link ảnh Chính:</label>
                      <input
                      required
                        className="form-control  w-100"
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                      />
                      <br />
                      <label>Ảnh phụ 1</label>
                      <input
                      required
                        className="form-control  w-100"
                        type="text"
                        value={img1}
                        onChange={(e) => setImg1(e.target.value)}
                      />
                      <br />
                      <label>Ảnh phụ 2</label>
                      <input
                      required
                        className="form-control  w-100"
                        type="text"
                        value={img2}
                        onChange={(e) => setImg2(e.target.value)}
                      />
                      <br />
                      <label>Ảnh phụ 3</label>
                      <input
                        className="form-control  w-100"
                        type="text"
                        value={img3}
                        onChange={(e) => setImg3(e.target.value)}
                      />
                      <br />
                      <label>Đánh giá:</label>
                      <input
                        className="form-control  w-100"
                        type="number"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                      />
                      <br />
                      <label>Số lượt đánh giá:</label>
                      <input
                        className="form-control  w-100"
                        type="number"
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                      />
                      <br />

                      <button
                        className="btn btn-primary mb-5 text-center "
                        onClick={handleAddProduct}
                      >
                        Thêm sản phẩm
                      </button>
                    </from>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
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

export default AddProduct;
