import express from "express";
import usersRouter from "./src/routes/user.router.js";
import messageRouter from "./src/routes/message.router.js";
import { PORT } from "./src/configs/environment.js";
import connectDB from "./src/configs/mongo.js";

//taller 4
const app = express();

app.use(express.json());

// app.listen(PORT, () => {
//     console.log(`Server started ${PORT}`);
// });

async function startServer(){
    const isConnected = await connectDB();
    if(isConnected) {
        app.listen(PORT, () => {
            console.log(`Server started on ${PORT}`);
        });
    }else{
        process.exit();
    }
}

startServer();

app.get('/', (req, res) => {
    const alumno = [
        {nombre: "Vicente Aburto", titulo: "/Taller n°4 Express + Mongo DB"},
    ];
    const concatenacion = alumno[0].nombre + alumno[0].titulo;
    res.send(`${concatenacion}`);
});

//usuarios
app.use("/auth", usersRouter);
app.use("/users", usersRouter);

//mensajes
app.use("/message", messageRouter);
app.use("/users", messageRouter);