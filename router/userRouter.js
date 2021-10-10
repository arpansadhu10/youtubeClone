// const express = require("express")
import express from 'express';
import { changePassword, editProfile, userDetails, users } from '../controllers/userController.js';
import routes from './routers.js';



const userRoute = express.Router();

userRoute.get(routes.home, users)
userRoute.get(routes.userDetails, userDetails)
userRoute.get(routes.editProfile, editProfile)
userRoute.get(routes.changePassword, changePassword)


export default userRoute;
