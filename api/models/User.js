/*import mongoose from 'mongoose';
const {schema} = mongoose;

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    country:{
        type: String,
        required: true,
    },

    img: {
        type: String,
    },

    city: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
        required: true,
    },

    password:{
        type: String,
        required: true
    },

    isAdmin:{
        type: Boolean,
        default: false,
    },
},
{timestamps: true}
);

export default mongoose.model("User", UserSchema)
*/

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
});

export default mongoose.model("User", UserSchema);
