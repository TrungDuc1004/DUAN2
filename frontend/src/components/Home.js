import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faRightLeft, faTruckFast, faHeadset } from '@fortawesome/free-solid-svg-icons';
import '../css/Home.css';
import '../css/ProductList.css';

function Home() {
    return (
        <div>
            {/* Giới thiệu */}
            <div className='row home'>
                <div className='col col-6 introduce-home'>
                    <h1>Ẩm Thực Việt Nam</h1>
                    <span>Khám phá hương vị quê hương qua từng món ăn truyền thống.</span>
                    <p>
                        Từ phở Hà Nội, bún bò Huế đến bánh xèo miền Tây – tất cả hội tụ tại đây!
                        Website giới thiệu đặc sản từ mọi miền đất nước, giúp bạn:
                    </p>
                    <ul>
                        <li>✨ Khám phá món ăn theo vùng miền</li>
                        <li>🍜 Xem công thức và nguyên liệu</li>
                        <li>🔍 Tìm kiếm đặc sản yêu thích</li>
                        <li>🛒 Đặt món nhanh chóng, tiện lợi</li>
                    </ul>
                    <p>
                        Chúng tôi mong muốn lan toả tinh hoa ẩm thực Việt đến mọi người, mọi nơi!
                    </p>
                    <Link to='/menu'>
                        <button>Xem Ngay</button>
                    </Link>
                </div>

                {/* Hình ảnh nền */}
                <div className='col col-6 img-home'>
                    <img className="img-background" src="img/anh nền.png" alt="Ẩm Thực Việt" />
                </div>
            </div>

        </div>
    );
}

export default Home;
