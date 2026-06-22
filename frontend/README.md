# 🌍 JourneyJar

JourneyJar is a full-stack travel journaling web application that allows users to capture, organize, and revisit their travel experiences. Users can create travel stories, upload images, mark favorite memories, search entries, and filter stories by travel date through an intuitive and responsive interface.

## 🚀 Live Demo

🌐 https://journeyjar-eta.vercel.app

---

## ✨ Features

- 🔐 Secure User Authentication (Sign Up & Login)
- 📝 Create, Edit, and Delete Travel Stories
- 📸 Upload and Manage Travel Images
- ⭐ Mark Travel Stories as Favorites
- 🔍 Search Stories by Title, Description, or Location
- 📅 Filter Stories by Travel Date
- 📱 Fully Responsive User Interface
- ☁️ MongoDB Atlas Cloud Database Integration

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## 📂 Project Structure

```bash
JourneyJar/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── index.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/IshantSingh27/JOURNEY_JAR.git
cd JOURNEY_JAR
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend server:

```bash
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🎯 Future Enhancements

- 🌙 Dark Mode Support
- 👤 User Profile Management
- ☁️ Cloudinary Image Storage
- 🗺️ Interactive Travel Maps
- 📤 Story Sharing Features
- 💬 Social Interactions and Comments

---

## 👨‍💻 Author

**Ishant Singh**

- GitHub: https://github.com/IshantSingh27
- LinkedIn: https://www.linkedin.com/in/ishant-singh-a7b2a3298/

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ Star on GitHub.

Feel free to fork the repository, raise issues, and contribute to future improvements.