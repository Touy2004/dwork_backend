import express from 'express';
import { port } from './middleware/config.js';


const app = express();

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});