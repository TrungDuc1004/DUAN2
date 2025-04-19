import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../../css/Footer.css';

function Footer() {
    return (
        <footer>
            <div className='row footer'>
                {/* Giới thiệu ngắn */}
                <ul className="col col-3">
                    <p>Ẩm Thực Việt Nam
                        <br />
                        <li>
                            Nơi hội tụ tinh hoa ẩm thực từ mọi miền đất nước. Dễ dàng khám phá, tìm kiếm và đặt món chỉ với vài cú click.
                        </li>
                    </p>
                </ul>

                {/* Danh mục nổi bật */}
                <ul className="col col-3">
                    <p>Đặc Sản Nổi Bật
                        <br />
                        <li>
                            <Link className='footer-link' to='/shop'>Phở Hà Nội</Link>
                        </li>
                        <li>
                            <Link className='footer-link' to='/shop'>Bún bò Huế</Link>
                        </li>
                        <li>
                            <Link className='footer-link' to='/shop'>Bánh xèo miền Tây</Link>
                        </li>
                    </p>
                </ul>

                {/* Liên kết trang */}
                <ul className="col col-3">
                    <p>Liên Kết Nhanh
                        <br />
                        <li>
                            <Link className='footer-link' to='/shop'>Danh sách món ăn</Link>
                        </li>
                        <li>
                            <Link className='footer-link' to='/cart'>Giỏ hàng</Link>
                        </li>
                        <li>
                            <Link className='footer-link' to='/login'>Đăng nhập</Link>
                        </li>
                    </p>
                </ul>

                {/* Thông tin liên hệ */}
                <ul className="col col-3">
                    <p>Thông Tin Liên Hệ
                        <br />
                        <li>
                            <FontAwesomeIcon style={{ paddingRight: '5px' }} icon={faLocationDot} />
                            807 Âu Cơ, Hòa Khánh Bắc, Đà Nẵng
                        </li>
                        <li>
                            <FontAwesomeIcon style={{ paddingRight: '5px' }} icon={faPhone} />
                            +84 702 693 755
                        </li>
                        <li>
                            <FontAwesomeIcon style={{ paddingRight: '5px' }} icon={faEnvelope} />
                            amthucvn@gmail.com
                        </li>
                    </p>
                </ul>

                {/* Bản quyền */}
                <ul>
                    <li>Copyright © 2025 Ẩm Thực Việt Nam</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
