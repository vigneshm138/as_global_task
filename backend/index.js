import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import userRouter from './Router/userRouter.js'
import studentRouter from './Router/studentRouter.js';

const app = express();


app.use(express.json());
app.use(cors());

// Data Base Connection
connectDB();

app.use('/users', userRouter)
app.use('/students', studentRouter)


app.listen(2001, () => {
    console.log("Server Conntect Succesfull :) ");
})
