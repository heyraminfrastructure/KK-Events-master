import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bookingRoute from './routes/bookingRoute.js'
dotenv.config();

const app = express();

app.use(express.json());

app.use(cors( 
//     {
//     origin: ["https://heyraminfrastructure.com"],
//     credentials: true,
//   }
))

// Router

app.use('/', bookingRoute);

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
  });
}).catch((error) => console.log(error));
