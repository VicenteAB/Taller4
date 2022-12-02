import Message from "../models/message.model.js";

//Usa forma 1 de insertar datos (mensaje)
async function createMessageV1(req, res){
    try {
        const createdMessage = await Message.create({
            userId: req.body.userId,
            message: req.body.message,
        });
        return res.status(201).send({response: createdMessage});
    } catch (error) {
        return res.status(500).send({ error });
    }
}

//obtener mensaje
async function getMessages(req, res){
    const messages = await Message.find();
    return res.status(200).send({ messages });
}

//borrar mensaje (probar)
async function deleteMessage(req, res){
    const messages = await Message.delete();
    return res.status(200).send({ messages });
}

export{
    createMessageV1,
    getMessages,
    deleteMessage,
};