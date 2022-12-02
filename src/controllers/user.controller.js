import User from "../models/user.model.js";
import bcrypt from "bcrypt";

//Usa forma 1 de insertar datos
async function createUserV1(req, res){
    try {
        const createdUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            dni: req.body.dni,
            password: req.body.password,
        });
        return res.status(201).send({response: createdUser});
    } catch (error) {
        return res.status(500).send({ error });
    }
}

async function getUsers(req, res){
    const users = await User.find();
    return res.status(200).send({ users });
}

export{
    createUserV1,
    getUsers,
};