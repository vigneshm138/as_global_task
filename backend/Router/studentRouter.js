import express from 'express';
import { studentEntry, getStudent, editStudent } from '../controller/studentController.js';


const router = express.Router();

router.get('/', (req, res) => {
    res.send("Welcome");
})

router.post('/addStudents', studentEntry)
router.get('/getStudents', getStudent)


export default router;