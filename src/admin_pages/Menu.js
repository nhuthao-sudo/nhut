import React from 'react'
import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
<>

<ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion " 
            id="accordionSidebar"
          >
            {/* Sidebar - Brand */}
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href="/dashboard"
            >
           Dashboard
            </a>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
              <Link className="nav-link" to={"/dashboard"}>
                <i className="fas fa-fw fa-tachometer-alt" />
                <span>Tổng Quan</span>
              </Link>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">Shopee</div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="/#"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <i className="fas fa-fw fa-cog" />
                <span>Quản Lý Sản Phẩm</span>
              </a>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Danh Mục Quản Lý</h6>
                  <Link className="collapse-item" to={"/addProduct"}>
                    Thêm sản phẩm
                  </Link>
                  <Link className="collapse-item" to={"/productAdminList"}>
                   Sản Phẩm Và Edit
                  </Link>
                </div>
              </div>
            </li>
         
            {/* <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="/#"
                data-toggle="collapse"
                data-target="#collapseUtilities"
                aria-expanded="true"
                aria-controls="collapseUtilities"
              >
                <i className="fas fa-fw fa-table" />
                <span>Tables</span>
              </a>
              <div
                id="collapseUtilities"
                className="collapse"
                aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Quản Lý Sản Phẩm</h6>
                  <a className="collapse-item" href="utilities-color.html">
                    Danh Sách Sản Phẩm
                  </a>
                  <a className="collapse-item" href="utilities-border.html">
                    Borders
                  </a>
                  <a className="collapse-item" href="utilities-animation.html">
                    Animations
                  </a>
                  <a className="collapse-item" href="utilities-other.html">
                    Other
                  </a>
                </div>
              </div>
            </li> */}

            {/* Nav Item - Pages Collapse Menu */}

            <li className="nav-item">
              <Link className="nav-link" to={"/checkout"}>
                <i className="fas fa-fw fa-table" />
                <span>Danh sách Đặt hàng</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/editqc"}>
                <i className="bi bi-badge-ad-fill" />
                <span>Quảng cáo</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                <i className="bi bi-browser-chrome" />
                <span>Xem Trang Web</span>
              </Link>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
            {/* Sidebar Toggler (Sidebar) */}

            {/* <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" />
      </div> */}

            {/* Sidebar Message */}
          </ul>
</>
  )
}

export default Menu