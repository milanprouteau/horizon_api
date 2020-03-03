import { Schema, model } from 'mongoose';

//Flight creation
const flightSchema = new Schema({
    departureCity: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'City'
    },
    arrivalCity: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'City'
    },
    departureTime: {
        type: Date,
        require: true
    },
    arrivalTime: {
        type: Date,
        require: true
    }
});

const Flight = model('Flight', flightSchema);
export default Flight;