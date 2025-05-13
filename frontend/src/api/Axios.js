import axios from 'axios';
import { toast } from 'sonner';

const api = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' },
});

let isRefreshingToken = false;

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        } else {
            console.warn("Không tìm thấy token, gửi request không có Authorization");
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            console.error("Error Response Data:", error);

            if (error.response.status === 401) {
                if (!isRefreshingToken) {
                    isRefreshingToken = true;
                    toast.error("Bạn chưa đăng nhập hoặc phiên đã hết hạn!");
                    localStorage.removeItem('token');

                    setTimeout(() => {
                        isRefreshingToken = false; // Đặt lại sau khi redirect
                        window.location.href = "/login";
                    }, 1000);
                }
            } else if (error.response.status === 403) {
                toast.error("Bạn không có quyền truy cập!");
            } else if (error.response.status === 400 || error.response.status === 500) {
                const errorMessage = error.response.data?.error || error.response.data?.message || "Lỗi không xác định từ server!";
                toast.error(typeof errorMessage === 'string' ? errorMessage : "Lỗi không xác định từ server!");
            }

        } else if (error.request) {
            console.warn("Không nhận được phản hồi từ server:", error.request);
            toast.error("Không thể kết nối đến server!");
        } else {
            console.error("Axios error:", error);
            toast.error("Đã xảy ra lỗi trong quá trình xử lý!");
        }

        return Promise.reject(error);
    }
);

export default api;
