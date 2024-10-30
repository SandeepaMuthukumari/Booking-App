

import mongoose from 'mongoose';
const {schema} = mongoose;
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    maxPeople: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
/*
    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true,
      },
*/
    roomNumbers: [{
        number: {
            type: Number,
            required: true
        },
        unavailableDates: {
            type: [Date]
        }
    }],
}, { timestamps: true });

export default mongoose.model("Room", RoomSchema);

