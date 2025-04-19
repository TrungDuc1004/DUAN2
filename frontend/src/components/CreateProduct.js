import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ToastContext } from "./contexts/ToastContext";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import '../css/CreateProduct.css'

function CreateProduct() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [oldPrice, setOldPrice] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    //
    const navigate = useNavigate();
    const { showToast } = useContext(ToastContext);
    const token = localStorage.getItem('token');

    const handleSubmit = (e) => {
        e.preventDefault();

        const productData = {
            name,
            description,
            image,
            oldPrice,
            newPrice,
            location,
            category
        };

        if (!token) {
            showToast({ title: "Bạn cần đăng nhập trước!", type: "warning" });
        } else {
            axios.post('http://localhost:5000/products/create', productData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
                .then(response => {
                    navigate("/manager/admin");
                    showToast({ title: "Thêm món ăn thành công!", type: "success" });
                })
                .catch(error => {
                    console.error('Lỗi khi tạo món ăn:', error);
                });
        }
    };

    return (
        <div>
            <div className='row'>
                <div className="col col-12 img-extra">Tạo món ăn</div>
            </div>

            <div className='container'>
                <h2>Thêm món ăn mới</h2>

                <form id='form' onSubmit={handleSubmit}>
                    <div className='form-input'>
                        <label>Tên món ăn:</label>
                        <input type="text" onChange={(e) => setName(e.target.value)} required />
                    </div>

                    <div className='form-input'>
                        <label>Loại đặc sản:</label>
                        <select onChange={(e) => setCategory(e.target.value)} required>
                            <option value="">Tất cả</option>
                            <option>Miền Bắc</option>
                            <option>Miền Trung</option>
                            <option>Miền Nam</option>

                        </select>
                    </div>

                    <div className='form-description-textarea'>
                        <label>Mô tả món ăn:</label>
                        <textarea onChange={(e) => setDescription(e.target.value)} maxLength="600" />
                    </div>

                    <div className='form-input'>
                        <label>Link ảnh:</label>
                        <input type="text" onChange={(e) => setImage(e.target.value)} maxLength="255" />
                    </div>

                    <div className='form-input'>
                        <label>Giá gốc (VNĐ):</label>
                        <input type="number" onChange={(e) => setOldPrice(e.target.value)} required />
                    </div>

                    <div className='form-input'>
                        <label>Giá khuyến mãi (VNĐ):</label>
                        <input type="number" onChange={(e) => setNewPrice(e.target.value)} required />
                    </div>

                    <div className='form-input'>
                        <label>Khu vực:</label>
                        <input type="text" onChange={(e) => setLocation(e.target.value)} maxLength="50" />
                    </div>

                    <div className='form-actions'>
                        <Link to={`/manager/admin`}>
                            <button type="button" className='prd-button'>Quay lại</button>
                        </Link>
                        <button className='prd-button' type="submit">Thêm món ăn</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateProduct;
