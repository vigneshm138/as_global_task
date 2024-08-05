import userModel from "../model/userModel.js";
import bcrypt from 'bcrypt'


const addUser = async (req, res) => {
    try {
        const { mail, password } = req.body

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new userModel({
            mail: mail,
            password: hashPassword
        })
        await newUser.save();
        res.send("success")
    } catch (error) {
        res.json({ sta: false, message: "error" })
    }
}


const userLogin = async (req, res) => {
    try {
        const { mail, password } = req.body;
        const user = await userModel.findOne({ mail });
        console.log(user);

        if (!user) {
            return res.json({ sta: false, message: "Incorrect User" });
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if (!checkPassword) {
            return res.json({ sta: false, message: "Incorrect Password" });
        }

        res.json({ sta: true, message: "Login Successfully" });
    } catch (error) {
        console.error("Login error:", error);
        res.json({ sta: false, message: "An error occurred" });
    }
};


export { userLogin, addUser };