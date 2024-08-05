import express from 'express';
import { userLogin, addUser } from '../controller/userController.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Welcome");
})

router.post('/getUser', userLogin)
router.post('/addUser', addUser)

export default router;