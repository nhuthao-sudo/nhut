import React from 'react'
import { NavLink } from 'react-bootstrap'
import Headerchung from './Headerchung'
import Menu from './Menu'

const Dashboard = () => {
  return (
    <>


      <div id="page-top">
        {/* Page Wrapper */}
        <div id="wrapper">
          <Menu />


          {/* End of Sidebar */}
          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              <Headerchung />
              <div className="container-fluid">
                <h1 className='text-center text-danger'></h1>
                <img src={`${process.env.PUBLIC_URL}/assets/db.png`} id="thongcam" style={{ width: "1000px" }} className="w-100" alt='thongcam' />

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
  )
}

export default Dashboard