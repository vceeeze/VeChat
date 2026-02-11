import express from 'express';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import messageRoutes from './routes/messageRoutes';
import chatRoutes from './routes/chatRoutes';

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies and makes it available under req.body

app.get("/health", (req,res) => {
    res.json({status: "OK", message: "Server is healthy"});

});

app.use("/api/auth", authRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);
export default app;