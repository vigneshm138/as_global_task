import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    fee: {
        type: Number,
        required: true,
    },
    sem: {
        type: String,
        required: true,
    }
})


const studentModel = mongoose.model('as_student', studentSchema);

export default studentModel;