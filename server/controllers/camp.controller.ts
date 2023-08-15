import { Request, Response } from 'express';
import { campService } from '../services';

const returnHeaders = (request: Request, res: Response) => {
  res.status(200).json(request.headers);
};

const sayHello = (request: Request, res: Response) => {
  const name: string = request.query['name'] as string || 'nobody';
  res.status(200).json(campService.sayHello(name));
};

export default {
  returnHeaders,
  sayHello
};