import mongoose from 'mongoose';

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL).then((con) => {
        console.log('MongoDB connected to host: '+con.connection.host)
    })
};

export default connectDatabase;