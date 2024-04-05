import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: "String",
        default: "google-oauth"
    },
    profileImage: {
        type: String,
        default: "/images/profileimage"
    }
})
const userModel=mongoose.model("users",userSchema)
export default userModel