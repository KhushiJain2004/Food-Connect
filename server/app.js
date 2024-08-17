import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import mongoose from 'mongoose';

const app=express();

app.use(express.json());
app.use(cors({origin: "http://localhost:5173", credentials:true}));

const url="mongodb+srv://kj866795:LLCRlbvOJCFXkJjd@cluster0.hah8tdn.mongodb.net/food-connect?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url)
.then(console.log("connected"))
.catch(e=>console.log(e.message));

const PORT=process.env.PORT
app.listen(PORT,()=>
{
    console.log(`listening on port ${PORT}`);
})      