// const express = require("express")
import express from 'express';
import { join, login, logout } from '../controllers/userController.js';
import { home, search } from '../controllers/videoController.js';
import routes from './routers.js';


const globalRoute = express.Router();

globalRoute.get(routes.home, home)
globalRoute.get(routes.search, search)
globalRoute.get(routes.join, join)
globalRoute.get(routes.login, login)
globalRoute.get(routes.logout, logout)


export default globalRoute;
