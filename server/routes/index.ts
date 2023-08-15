import express from 'express';
import campRoute from './camp.routes';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/camps',
    route: campRoute
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;