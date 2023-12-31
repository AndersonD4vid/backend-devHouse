import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';

import SessionController from './controllers/SessionController';
import HouseController from './controllers/HouseController';
import HouseDashboardController from './controllers/HouseDashboardController';
import ReservaController from './controllers/ReservaController';

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.post('/houses', upload.single('thumbnail'), HouseController.store);
routes.get('/houses', HouseController.index);
routes.put('/houses/:house_id', upload.single('thumbnail'), HouseController.update);
routes.delete('/houses', HouseController.destroy);

routes.get('/dashboard', HouseDashboardController.show);

routes.post('/houses/:house_id/reserva', ReservaController.store);
routes.get('/reservas', ReservaController.index);
routes.delete('/reservas/cancelar', ReservaController.destroy);


export default routes;