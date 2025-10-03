import mongoose from 'mongoose';
import { config } from '../config/env-config.js';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(config.DATABASE.URI);
        console.log(
            `DATABASE CONNECTED SUCCESSFULLY: `,
            connectionInstance.connection.host
        );
    } catch (error) {
        console.log('DATABASE CONNECTION FAILED!!!', error);
        process.exit(1);
    }
};

export { connectDB };
