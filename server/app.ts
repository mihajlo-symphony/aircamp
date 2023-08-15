import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import http, { Server } from 'http';
import routes from './routes';

dotenv.config();
const port = 3000;
const app: Express = express();
const server: Server = http.createServer(app)

app.set('json spaces', 2)

// v1 api routes
app.use('/api', routes);

// send back a 404 error for any unknown api request
app.use((request: Request, response: Response, next: NextFunction) => {
  next(response.status(404).json({message: "404 Not Found"}));
});

server.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`App started on http://localhost:${port}`);
});