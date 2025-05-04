const Todocontroller = require('../models/todo');

const getalltodolist = async (req,res) => {
    try {
        const gettodo = await Todocontroller.find();
        res.json(gettodo);
    } catch (err) {
        res.status(500).json({eror: err.hai_baba});
    }
};
const createtodo = async (req,res) => {
    try {
        const create = new Todocontroller(req.body);
        const savetodo = await create.save();
        res.status(201).json(savetodo)
    } catch (err) {
        res.status(400).json({error : err.hai_baba});
    }
};

const updatetodo = async (req,res) => {
     const { id, todoname, done } = req.body;
    try {
        const updatingtodo = await Todocontroller.findByIdAndUpdate(
            id,
            {todoname , done},
            { new:true }
        );
        res.status(200).json(updatingtodo)
    } catch (err) {
         res.status(400).json({error: err.hai_baba});
    }
};

const deletetodo = async (req, res) => {
    try {
        await Todocontroller.findByIdAndDelete(req.params.id);
        res.json({message : 'Todo deleted'})
    } catch (err) {
        res.status(400).json({error : err.hai_baba})
    }
}

module.exports = {
    getalltodolist,
    createtodo,
    updatetodo,
   deletetodo
}