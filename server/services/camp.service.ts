import { HelloResponse } from '../types/response';

const sayHello = (name: string): HelloResponse => {
  return {message: `Hello, ${name}`} as HelloResponse;
};

export default {
  sayHello
};