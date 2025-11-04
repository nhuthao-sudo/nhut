import React from 'react'
import { Link } from 'react-router-dom'

const Danhmuc = () => {
  return (
    <>
      <div className="row mx-0 mt-5 pb-3 kategory">
        <h5 className="p-4">DANH MỤC</h5>
        <div className="d-flex">
          <div className="d-flex flex-column align-items-center card-kategory">
            <Link className="wrap-img" to={"/ti-vi"}>
              <img
                className="w-100 h-100"
                src="assets/samsung.jpg"
                alt=""
              />
            </Link>
            <span className="mb-0 flex-column mt-2">SamSung</span>
          </div>
          <div className="d-flex flex-column align-items-center card-kategory">
            <Link className="wrap-img" to={"/dien-thoai"}>
              <img
                className="w-100 h-100"
                src="assets/iphone.jpg"
                alt=""
              />
            </Link>
            <p className="mb-0 flex-column mt-2">Iphone</p>
          </div>
          <div className="d-flex flex-column align-items-center card-kategory">
            <Link className="wrap-img" to={"/bep-dien"}>
              <img
                className="w-100 h-100"
                src="assets/Sony.jpg"
                alt=""
              />
            </Link>
            <p className="mb-0 flex-column mt-2">Sony</p>
            {/* <p className="mb-0 flex-column">Phụ Kiện</p> */}
          </div>
          <div className="d-flex flex-column align-items-center card-kategory">
            <Link className="wrap-img" to={"/lo-vi-song"}>
              <img
                className="w-100 h-100"
                src="assets/Xiaomi.jpg"
                alt=""
              />
            </Link>
            <p className="mb-0 flex-column mt-2">Xiaomi</p>
          </div>

          <div className="d-flex flex-column align-items-center card-kategory">
            <Link className="wrap-img" to={"/say-toc"}>
              <img
                className="w-100 h-100"
                src="assets/honor.jpg"
                alt=""
              />
            </Link>
            <p className="mb-0 flex-column mt-2">Honor</p>

          </div>
          <div className="d-flex flex-column align-items-center card-kategory">
            <Link className="wrap-img" to={"/camera"}>
              <img
                className="w-100 h-100"
                src="assets/huawei.jpg"
                alt=""
              />
            </Link>
            <p className="mb-0 flex-column mt-2">Huawei</p>
          </div>
          <div className="d-flex flex-column align-items-center card-kategory">
            <Link className="wrap-img" to={"/tu-lanh"}>
              <img
                className="w-100 h-100"
                src="assets/asus.jpg"
                alt=""
              />
            </Link>
            <p className="mb-0 flex-column mt-2">Asus</p>
          </div>
          <div className="d-flex flex-column align-items-center card-kategory">
            <Link className="wrap-img" to={"/may-lanh"}>
              <img
                className="w-100 h-100"
                src="assets/oppo.jpg"
                alt=""
              />
            </Link>
            <p className="mb-0 text-center mt-2">
              Oppo
            </p>
          </div>
          <div className="d-flex flex-column align-items-center card-kategory">
            <Link className="wrap-img" to={"/vatdung"}>
              <img
                className="w-100 h-100"
                src="assets/realme.jpg"
                alt=""
              />
            </Link>
            <p className="mb-0 text-center mt-2">
              Realme
            </p>
          </div>
          <div className="d-flex flex-column align-items-center card-kategory">
            <Link className="wrap-img" to={"/noi-com-dien"}>
              <img
                className="w-100 h-100"
                src="assets/vivo.jpg"
                alt=""
              />
            </Link>
            <p className="mb-0 text-center mt-2">
              Vivo
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Danhmuc