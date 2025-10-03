import { initializeExpressApplication } from './src/app.js';
import { config } from './src/config/env-config.js';
import { connectDB } from './src/db/db.js';

connectDB()
    .then(() => {
        initializeExpressApplication().listen(config.SERVER.PORT, () => {
            console.log(
                `Server is running on http://localhost:${config.SERVER.PORT}`
            );
        });
    })
    .catch((err) => {
        console.log(`Server running failed!!!`, err);
    });
