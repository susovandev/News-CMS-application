import { initializeExpressApplication } from './src/app.js';
import { config } from './src/config/env-config.js';

initializeExpressApplication().listen(config.SERVER.PORT, () => {
    console.log(`Server is running on http://localhost:${config.SERVER.PORT}`);
});
