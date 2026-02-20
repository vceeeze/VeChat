import express from 'express';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import messageRoutes from './routes/messageRoutes';
import chatRoutes from './routes/chatRoutes';
import { clerkMiddleware } from '@clerk/express'
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies and makes it available under req.body
app.use(clerkMiddleware())

app.get("/health", (req,res) => {
    res.json({status: "OK", message: "Server is healthy"});

});

app.use("/api/auth", authRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);


// error handlers must come after all the routes and other middlewares so they can catch errors passed with next(err) or thrown inside async handlers.
app.use(errorHandler);
export default app;