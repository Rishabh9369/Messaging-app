import express from 'express';
import Connection from './database/db.js';
import Routes from './Routes/route.js';
import cors from'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const PORT=8000;

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
Connection(USERNAME,PASSWORD);


app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', Routes);



app.listen(PORT,()=> console.log(`Server is running successfully on ${PORT}`));