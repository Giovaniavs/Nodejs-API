import { Router } from 'express';
import SendMailController from './controllers/SendMailController';
import  SurveysController  from './controllers/SurveysController';
import  UserController from './controllers/UserController'

const router = Router();

router.post("/users", UserController.create);

router.post("/surveys", SurveysController.create);
router.get("/surveys", SurveysController.listAllSurveys);

router.post("/sendMail", SendMailController.execute)

export { router };