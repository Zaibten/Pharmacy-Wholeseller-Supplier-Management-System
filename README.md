# 🏬 Wholesaler & Retailer Platform  

A **full-stack MERN application** for **Wholesalers & Retailers** to manage products, orders, and bulk deals 🚀.  
Includes **Firebase SMTP for Emails**, **React.js Frontend**, **Node.js + Express Backend**, **Firebase Database**, and a **Flutter Mobile App** 📱.  

---

## ✨ Features  

### 🌐 Web Application (MERN)
- 👤 **Authentication & Authorization** (JWT + Role-based: Wholesaler / Retailer / Admin)  
- 🛒 **Product Management** (Add, Edit, Delete, Categories)  
- 📦 **Bulk Orders & Wholesale Pricing**  
- 💳 **Order & Payment Management**  
- 📊 **Analytics Dashboard** (Sales, Customers, Inventory)  
- 📧 **Email Notifications via Firebase SMTP**  

### 📱 Mobile App (Flutter)
- 🔐 Secure Login & Registration  
- 🛍️ Browse Products (Retailer / Wholesaler Views)  
- 🛒 Add to Cart & Place Orders  
- 📦 Track Orders in Real-time  
- 📩 Push Notifications  

---

## 🛠️ Tech Stack  

### Web App (MERN)
- ⚛️ **Frontend:** React.js (with Redux & Tailwind/MUI)  
- 🟢 **Backend:** Node.js + Express.js  
- 🍃 **Database:** Firebase  
- 🔥 **Email & Notifications:** Firebase SMTP  

### Mobile App
- 📱 **Frontend:** Flutter  
- 🔗 **API Integration:** REST APIs with Node.js Backend  

---

## 🚀 Installation  

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/wholesaler-retailer-platform.git
cd wholesaler-retailer-platform
```

### 2️⃣ Backend Setup (Node.js + Express)
```bash
cd backend
npm install
```

- Create `.env` file:
```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
FIREBASE_API_KEY=your_firebase_api_key
SMTP_EMAIL=your_email
SMTP_PASSWORD=your_password
```

- Run backend:
```bash
npm start
```

### 3️⃣ Frontend Setup (React.js)
```bash
cd frontend
npm install
npm start
```

### 4️⃣ Mobile App Setup (Flutter)
```bash
cd mobile_app
flutter pub get
flutter run
```

---

## 📧 Email System (Google SMTP)  
- Uses **Google SMTP** for transactional emails:  
  - ✅ Order Confirmation  
  - ✅ New Account Registration  
  - ✅ Password Reset  

---

## 🧪 Testing  
```bash
# Backend Tests
cd backend
npm test
```

```bash
# Flutter App Tests
flutter test
```

---

## 📂 Project Structure  

```
wholesaler-retailer-platform/
│── backend/        # Node.js + Express + MongoDB
│── frontend/       # React.js Frontend
│── mobile_app/     # Flutter Mobile App
│── screenshots/    # Project screenshots
│── README.md
```

---

## 🤝 Contributing  

Contributions are welcome! 🎉  
- Fork the repo 🍴  
- Create a new branch 🌱  
- Submit a Pull Request 🚀  

---

## 📜 License  

This project is licensed under the **MIT License** 📄.  

---

## 👨‍💻 Author  

Developed with ❤️ by [Zaibten](https://github.com/zaibten)  
