import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    mail: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})


const userModel = mongoose.model('as_User', userSchema);

export default userModel;