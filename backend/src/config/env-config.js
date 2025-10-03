import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

const _config = {
    SERVER: {
        NODE_ENV: process.env.NODE_ENV.trim(),
        PORT: Number(process.env.PORT),
    },
    DATABASE: {
        URI: String(process.env.DATABASE_URI),
    },
};

export const config = Object.freeze(_config);
