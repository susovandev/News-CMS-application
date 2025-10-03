import express from 'express';

const initializeExpressApplication = () => {
    const app = express();

    return app;
};

export { initializeExpressApplication };
