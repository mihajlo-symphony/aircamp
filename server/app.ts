import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import http, { Server } from 'http';

dotenv.config();
const port = 3000;
const app: Express = express();
const server: Server = http.createServer(app)

app.set('json spaces', 2)

app.get('/', (req: Request, res: Response) => {
  res.status(200).json(req.headers)
});

app.get('/hello', (req: Request, res: Response) => {
  const name = req.query['name'] || 'nobody';
  res.status(200).json({message: `Hello, ${name}`})
});

app.get('*', (req: Request, res: Response) => {
  res.status(404).json({message: "404 Not Found"});
});

server.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`App started on http://localhost:${port}`);
});