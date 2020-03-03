import { Router } from 'express';
import UserController from '../controllers/users.controller';
import Auth from '../config/auth';
import CityController from '../controllers/cities.controller';
import FlightController from '../controllers/flights.controller';

const router = Router();

//ROUTES
//GET, POST, DELETE, PATCH

router.get('/test', function(req, res){
    res.send("test");
});

//Users routes
router.get('/users', Auth.auth([1, 10]), UserController.list);
router.post('/users/authenticate', UserController.auth);
router.post('/users', UserController.create);
// router.get('/users/:id', UserController.details);
router.delete('/users/:id', UserController.delete);
router.put('/users/:id', UserController.update);

//Cities routes
router.get('/cities', CityController.list);
router.post('/cities', CityController.create);
router.get('/cities/:id', CityController.details);
router.delete('/cities/:id', CityController.delete);
router.put('/cities/:id', CityController.update);

//Flights routes
router.get('/flights', FlightController.list);
router.post('/flights', FlightController.create);
router.get('/flights/:id', FlightController.details);
router.delete('/flights/:id', FlightController.delete);
router.put('/flights/:id', FlightController.update);


export default router;
