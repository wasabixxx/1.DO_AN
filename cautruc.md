src/
├── assets/             # Chứa hình ảnh, icon, font, v.v.
├── components/         # Các component tái sử dụng (nút, khung chat, form)
│   ├── ChatBox/
│   ├── MessageItem/
│   ├── UserInput/
├── layouts/            # Cấu trúc giao diện chính (Header, Footer, Sidebar…)
│   └── MainLayout.jsx
├── pages/              # Các trang chính trong ứng dụng
│   ├── Home.jsx
│   ├── About.jsx
│   └── NotFound.jsx
├── services/           # Giao tiếp với API (ví dụ: gọi OpenAI API)
│   └── openaiService.js
├── utils/              # Hàm tiện ích chung, xử lý logic, validate input…
├── constants/          # Các hằng số dùng toàn hệ thống (prompt mặc định, ngành nghề…)
├── context/            # Context API cho global state (nếu dùng)
│   └── ChatContext.jsx
├── hooks/              # Custom React Hooks (nếu có)
├── App.jsx             # Component gốc
├── main.jsx            # Điểm vào của ứng dụng React
└── index.css           # CSS global hoặc import Ant Design
