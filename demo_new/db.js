// Khởi tạo Database nếu chưa có
let dbKey = 'doubleK_DB_MultiPage';
let db = JSON.parse(localStorage.getItem(dbKey));

if (!db) {
    db = {
        users: [{ id: 'admin', name: 'Nguyễn Quản Trị', role: 'Admin', password: '123' }],
        customers: [{ id: 'KH001', name: 'Khách Test', phone: '0988888888' }],
        products: [
            { id: 'PC001', name: 'Laptop Dell XPS 15', price: 45000000, stock: 15, img: 'fa-laptop' },
            { id: 'PC002', name: 'PC Gaming Core i7', price: 32000000, stock: 5, img: 'fa-computer' },
            { id: 'PC003', name: 'Bàn phím cơ Razer', price: 2500000, stock: 30, img: 'fa-keyboard' }
        ],
        orders: []
    };
    saveDB();
}

// Lưu Database
function saveDB() {
    localStorage.setItem(dbKey, JSON.stringify(db));
}

// Tạo ID tự động
function generateId(prefix) { 
    return prefix + Math.floor(Math.random() * 10000).toString().padStart(4, '0'); 
}

// Lấy thông tin người dùng đang đăng nhập
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

// Đăng xuất chung
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html'; // Đẩy về trang đăng nhập
}