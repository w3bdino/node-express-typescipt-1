import express, { Application } from 'express';
import bodyParser from 'body-parser';
import config from 'config';
import { readdirSync } from 'fs';
import 'dotenv/config';

// Boot express
const app: Application = express();
const port = config.get<number>('port');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// load all routes in routes folder
readdirSync('./src/routes').map((r) => app.use('/api', require(`./routes/${r}`)));
app.use(function (req, res) {
  res.status(404).send('Sorry, we cannot find that!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
  //routes(app);
});
