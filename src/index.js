import express from 'express';
import config from './config/config';
import routes from './routes/route';
import bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.json());

app.use('/app', routes);

app.listen(config.port, () => console.log(`Server listening on port ${config.port}`));
