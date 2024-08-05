import studentModel from "../model/studentModel.js"

const studentEntry = async (req, res) => {
    try {

        const { name, date, fee, sem } = req.body;
        const students = new studentModel({
            name,
            date,
            fee,
            sem
        })
        await students.save();
        res.json({ sta: true, message: "Details Added" });
    } catch (error) {
        console.error("Login error:", error);
        res.json({ sta: false, message: "An error occurred" });
    }
}

const getStudent = async (req, res) => {
    try {
        const studentDatas = await studentModel.find();
        res.status(200).send({ datas: studentDatas });
    } catch (error) {
        console.error("Error fetching student data:", error);
        res.status(500).json({ sta: false, message: "An error occurred" });
    }
}



export { studentEntry, getStudent,editStudent }