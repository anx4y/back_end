import express, { Request, Response, request } from "express";
import {Classroom, Student,Teacher}from '@prisma/client'
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

//added classroom
app.post("/createclassroom", async (req: Request, res: Response) =>{ 
  const createclassroom = req.body as Classroom;
  await prisma.classroom.create({
    data:createclassroom 
  })
res.json("classroom added")
})
 
//get all classrooms

app.get("/getclassrooms", async (req: Request, res: Response) => {
  const getallcalssroom=await prisma.classroom.findMany()
  res.json(getallcalssroom)
})

// get all classroom with id

app.get("/getclassrooms/:id", async (req: Request, res: Response) => {
  const {id} = req.params
  const getcalssroomwithid=await prisma.classroom.findFirst({
   where:{id:id}
  })
  res.json(getcalssroomwithid)
})


//create student

app.post("/createstudent", async (req: Request, res: Response) => {
  const createstudent = req.body as Student;
  await prisma.student.create({
    data:createstudent 
  })
  res.json("student added")
})

//allgetstudents

app.get("/getstudents", async (req: Request, res: Response) => {
  const getallstudents=await prisma.student.findMany()
  res.json(getallstudents)
})


//create teacher

app.post("/createteacher", async (req: Request, res: Response) => {
  const createteacher = req.body as Teacher;
  await prisma.teacher.create({
    data:createteacher 
  })
  res.json("teacher added")
})

//allgetteachers

app.get("/getteachers", async (req: Request, res: Response) => {
  const getallteachers=await prisma.teacher.findMany()
  res.json(getallteachers)
})




app.listen(3006, () => {
  console.log(" server listing 3000");
});



