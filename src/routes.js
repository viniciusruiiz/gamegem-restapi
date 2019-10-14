import express from 'express'
const router = express.Router();

import GameController from './controller/GameController';
import UserController from './controller/UserController';

//Game
router.get('/game', GameController.findAll);
router.get('/game/:id', GameController.findOne);
router.post('/game', GameController.add);
router.put('/game/:id', GameController.update);
router.delete('/game/:id', GameController.delete)

//User
router.get('/user', UserController.findAll);
router.get('/user/:id', UserController.findOne);
router.post('/user', UserController.register);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.delete)

//Auth
//TODO: implement auth methods
router.post('/auth');
router.post('/logout');

module.exports = router;