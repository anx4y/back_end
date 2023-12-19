import express, { Request, Response, request } from "express";

import { connectDB, prisma } from "./config/db";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json());

connectDB();

// let user: Iuser[] = [

// ]

// let user:Iuser[]=[]

//app.get('/api/get',(req:Request,res:Response)=>{
//     res.json(user)
// })

// app.get('/api/get', (req: Request, res: Response) => {
//     res.json(alluser)
// })



//app.post('/api/post', (req: Request, res: Response) => {
//   const newuser = req.body as Iuser
// newuser.id = uuidv4()
//  user.push(newuser)
//  res.json('user added')
// })

