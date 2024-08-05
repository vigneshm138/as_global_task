import mongoose from "mongoose";


const connectDB = async () => {
    await mongoose.connect('mongodb+srv://vicky:foodorder@cluster0.2j7hozr.mongodb.net/FoodOrderWebsite').then(() => console.log("DB Conntected")
    )
}

export default connectDB;