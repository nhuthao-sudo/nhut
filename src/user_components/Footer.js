import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
/* footer */
.footer {
  border-top: 3px solid #f53d2d;
  top: 180px;
  position: relative;
  background-color: #ffffff;
}

.footer {
  font-size: 12px;
}

.footer .title {
  color: #666;
}

.footer .desc {
  color: #888;
}

.fl-sale{
  padding-left: 16px;
width: 114px;
height: 30px;
line-height: 30px;
text-transform: uppercase;
display: inline-block;
background-size: contain;
background-image: url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/fb1088de81e42c4e538967ec12cb5caa.png);
background-repeat: no-repeat;
}
`;
const Footer = () => {
  return (
    <>
      <StyledFooter>
      <div className="footer">
        <div className="container pt-5">
          <strong className=" font-weight-bold fs-6">
            AppStore Web bán điện thoại 
          </strong>
          <p className="desc">
            AppStore - ứng dụng mua sắm trực tuyến thú vị, tin cậy, an toàn và
            miễn phí! AppStore là nền tảng giao dịch trực tuyến hàng đầu ở Đông
            Nam Á, có trụ sở chính ở Việt Nam, 
          </p>
          <strong>
            MUA SẮM ONLINE ĐƠN GIẢN, NHANH CHÓNG VÀ AN TOÀN
          </strong>
          <p className="mt-3">
            Nếu bạn đang tìm kiếm một trang web để mua gấu bông AppStore là một sự lựa chọn tuyệt vời dành cho bạn. AppStore là
            trang thương mại điện tử cho phép người mua và trao đổi dễ dàng thông tin về sản phẩm và chương trình khuyến mãi
            của shop. Do đó, việc mua bán trên AppStore trở nên nhanh chóng và đơn
            giản hơn. Bạn có thể trò chuyện trực tiếp với nhà bán hàng để hỏi
            trực tiếp về mặt hàng cần mua. Còn nếu bạn muốn tìm mua những dòng
            sản phẩm chính hãng, uy tín, AppStore Mall chính là sự lựa chọn lí
            tưởng dành cho bạn. Để bạn có thể dễ dàng khi tìm hiểu và sử dụng
            sản phẩm, AppStore Blog - trang blog thông tin chính thức của AppStore -
            sẽ giúp bạn có thể tìm được cho mình các kiến thức về xu hướng thời
            trang, review công nghệ, mẹo làm đẹp, tin tức tiêu dùng và deal giá
            tốt bất ngờ.
          </p>
          <p className="mt-2">
            Đến với AppStore, bạn đã có thể mua
            ngay những sản phẩm mà mình thích. Không những thế, AppStore có
            thể tự tạo chương trình khuyến mãi trên AppStore để thu hút người mua
            với những sản phẩm có mức giá hấp dẫn. Khi đăng nhập tại AppStore Kênh
            người bán, bạn có thể dễ dàng phân loại sản phẩm, theo dõi đơn hàng,
            chăm sóc khách hàng và cập nhập ngay các hoạt động của shop.
          </p>
          <strong className=" mt-5">
            Truy cập website AppStore NGAY ĐỂ MUA đồ dùng MỌI LÚC, MỌI NƠI
          </strong>
          <p className="mt-2">
            Ưu điểm của ứng dụng AppStore là cho phép bạn mua và bán hàng mọi lúc,
            mọi nơi. Bạn có thể tải ứng dụng AppStore cũng như đăng sản phẩm bán
            hàng một cách nhanh chóng và tiện lợi. Ngoài ra, ứng dụng AppStore còn
            có những ưu điểm sau:
          </p>
          <li className="ms-5 mt-2">
            Giao diện thân thiện, đơn giản, dễ sử dụng. Bạn sẽ dễ dàng thấy được
            ngay những sản phẩm nổi bật cũng như dễ dàng tìm đến các ô tìm kiếm,
            giỏ hàng hoặc tính năng chat liền tay.
          </li>
          <li className="ms-5 mt-2">
            Ứng dụng tích hợp công nghệ quản lý đơn mua và bán hàng tiện lợi
            trên cùng một tài khoản. Bạn sẽ vừa là người mua hàng, vừa là người
            bán hàng rất linh hoạt, dễ dàng.
          </li>
          <li className="ms-5 mt-2">
            Cập nhập thông tin khuyến mãi, AppStore Flash Sale nhanh chóng và liên
            tục.
          </li>
          <p className="mt-3">
            Tại AppStore, bạn có thể lưu các mã giảm giá AppStore và mã miễn phí vận
            chuyển toàn quốc. Bên cạnh đó, AppStore cũng sẽ có những chiến dịch
            khuyến mãi lớn hằng năm như AppStore 2.2, Siêu hội tiêu dùng 15.3,
            AppStore 4.4 sale, AppStore 5.5 sale, AppStore sale 7.7,AppStore sale 8.8,
            AppStore sale 9.9, AppStore 10.10 sale, AppStore 11.11 sale, AppStore Sale
            sinh nhật; Khuyến Mãi Tết thả ga săn sale quà Tết chất lượng. Đây là
            thời điểm để người mua hàng có thể nhanh tay chọn ngay cho mình
            những mặt hàng ưa thích với mức giá giảm kỉ lục. Ngoài ra, bạn còn
            có thể thỏa thích săn sale vào các ngày trong tháng như Sale giữa
            tháng và Sale cuối tháng đón lương về .
          </p>
          <strong className="mt-3">
            MUA HÀNG HIỆU CAO CẤP GIÁ TỐT TẠI AppStore
          </strong>
          <p className="mt-2">
            Bên cạnh AppStore Premium, AppStore còn có rất nhiều khuyến mãi khủng
            cho hàng hiệu giảm đến 50%. Cộng với mã giao hàng miễn phí, AppStore
            cũng có các mã giảm giá được phân phối mỗi tháng từ rất nhiều gian
            hàng chính hãng tham gia chương trình khuyến mãi này. Bên cạnh đó,
            AppStore còn tập hợp rất nhiều thương hiệu đình đám được các nhà bán
            lẻ uy tín phân phối bán trên AppStore, top sản phẩm hot deal cho bạn
            săn sale luôn cập nhật mỗi giờ, mỗi ngày, đem đến cho bạn sự lựa
            chọn đa dạng, từ các hãng mỹ phẩm nổi tiếng hàng đầu như Kiehl's,
            MAC, Foreo, SK-II, Estee Lauder,... Đến những thương hiệu công nghệ
            nổi tiếng như camera hành trình Gopro, máy ảnh Fuifilm, webcam
            Hikvision, máy đọc sách Kindle,... Tại AppStore, bạn có thể dễ dàng
            tìm thấy các thương hiệu giày thể thao phổ biến hiện nay như:
            Converse, New Balance, Nike, Vans, Crocs,...{" "}
          </p>
          <strong className="mt-4">
            MUA HÀNG CHÍNH HÃNG TỪ CÁC THƯƠNG HIỆU LỚN VỚI AppStore
          </strong>
          <p className="mt-2">
            Mua hàng trên AppStore luôn là một trải nghiệm ấn tượng.  thì AppStore cũng
            sẽ đảm bảo cung cấp cho bạn những sản phẩm ưng ý,...Các thương
            hiệu này hiện cũng đã có cửa hàng chính thức trên AppStore Mall với
            hàng trăm mặt hàng chính hãng, được cập nhập liên tục. Là một kênh
            bán hàng uy tín, AppStore luôn cam kết mang lại cho khách hàng những
            trải nghiệm mua sắm online giá rẻ, an toàn và tin cậy. Mọi thông tin
            về người bán và người mua đều được bảo mật tuyệt đối. Các hoạt động
            giao dịch thanh toán tại AppStore luôn được đảm bảo diễn ra nhanh
            chóng, an toàn. Một vấn đề nữa khiến cho các khách hàng luôn quan
            tâm đó chính là mua hàng trên AppStore có đảm bảo không.
          </p>
          <p className="mt-2">
          AppStore luôn cam kết mọi sản phẩm trên AppStore, đặc biệt là AppStore
            Mall đều là những sản phẩm chính hãng, đầy đủ tem nhãn, bảo hành từ
            nhà bán hàng. Ngoài ra, ShTeddy Shoppee bảo vệ người mua và người bán bằng
            cách giữ số tiền giao dịch đến khi người mua xác nhận đồng ý với đơn
            hàng và không có yêu cầu khiếu nại, trả hàng hay hoàn tiền nào.
            Thanh toán sau đó sẽ được chuyển đến cho người bán. Đến với AppStore
            ngay hôm nay để mua hàng online giá rẻ và trải nghiệm dịch vụ chăm
            sóc khách hàng tuyệt vời tại đây. Đặc biệt khi mua sắm trên AppStore
            Mall, bạn sẽ được miễn phí vận chuyển, giao hàng tận nơi và 7 ngày
            miễn phí trả hàng. Ngoài ra, khách hàng có thể sử dụng AppStore Xu để
            đổi lấy mã giảm giá có giá trị cao và voucher dịch vụ hấp dẫn. Tiếp
            đến là AppStore Home Club, AppStore Mum Club, ShopeTeddy Shope Beauty Club và
            AppStore Book Club với các ưu đãi độc quyền từ các thương hiệu lớn có
            những khách hàng đã đăng ký làm thành viên. Hãy truy cập ngay
            AppStore.vn hoặc tải ngay ứng dụng AppStore về điện thoại ngay hôm nay!
          </p>
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
                    src="assets/thanhtoan.jpg"
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
                    src="assets/vanchuyen.jpg"
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
                      src="/assets/images/logo_yt.png"
                      width={20}
                      height={20}
                      alt=""
                      className="bi bi"
                    />
                    <span className="desc ml-3">Youtobe</span>
                  </div>
                  <div className="d-flex align-items-center mt-2">
                    <img src="/assets/images/logo_ig.png" width={20} height={20} alt="" />
                    <span className="desc ml-3">Instagram</span>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column ml-5">
                {/* <strong className=" font-weight-bold">
                  TẢI ỨNG DỤNG SHOPEE NGAY THÔI
                </strong> */}
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
                © 2024. Tất cả các quyền được bảo lưu.{" "}
              </span>
              <span className="fs-6">
                Quốc gia &amp; Khu vực:  Thái
                Lan | Việt Nam 
              </span>
            </div>
          </div>
        </footer>
      </div>
      {/* Optional JavaScript */}
      {/* jQuery first, then Popper.js, then Bootstrap JS */}
      </StyledFooter>
    </>
  );
};

export default Footer;
