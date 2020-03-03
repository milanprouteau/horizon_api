import { Schema, model} from 'mongoose';

//City creation
const citySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    continent: {
        type: String,
        required: true
    }
});

const City = model('City', citySchema);
export default City;