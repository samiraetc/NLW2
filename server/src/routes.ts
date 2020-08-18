import express, { request } from 'express';
import ClassesControllers from './controllers/ClassesControllers';
import ConnectonsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassesControllers();
const connectionsController = new ConnectonsController();

routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);
export default routes;
