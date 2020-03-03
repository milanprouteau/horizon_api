import { connect } from 'mongoose';

const connectDb = () => {
    let connection = null;

    connection = connect(`mongodb://localhost:27017/horizon`, {
        useNewUrlParser: true
    });

    return connection;
}

export default {connectDb};
