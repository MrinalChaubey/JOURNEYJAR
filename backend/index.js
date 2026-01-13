import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import path from "path"
import cors from "cors"
import { fileURLToPath } from "url"

import authRoutes from "./routes/auth.route.js"
import userRoutes from "./routes/user.route.js"
import travelStoryRoutes from "./routes/travelStory.route.js"

dotenv.config()

const app = express()

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
)

app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/travel-story", travelStoryRoutes)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use("/uploads", express.static(path.join(__dirname, "uploads")))
app.use("/assets", express.static(path.join(__dirname, "assets")))

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    statusCode: err.statusCode || 500,
    message: err.message || "Internal Server Error",
  })
})

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database is connected")
    app.listen(3000, () => {
      console.log("Server is running on port 3000!")
    })
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err)
  })
