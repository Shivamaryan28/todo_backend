const express = require('express');

const router = express.Router();

const {
    getalltodolist,
    createtodo,
    updatetodo,
    deletetodo
} = require('../controllers/todocontrollers');

router.get('/',getalltodolist);
router.post('/create',createtodo);
router.put('/update',updatetodo);
router.delete('/delete',deletetodo);

module.exports = router;