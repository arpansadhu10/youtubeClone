// const express = require("express")
import express from 'express';
import { deleteVideo, editVideo, upload, videoDetail, videos } from '../controllers/videoController.js';
import routes from './routers.js';


const videoRoute = express.Router();

videoRoute.get(routes.home, videos)
videoRoute.get(routes.upload, upload)
videoRoute.get(routes.videoDetail, videoDetail)
videoRoute.get(routes.editVideo, editVideo)
videoRoute.get(routes.deleteVideo, deleteVideo)



export default videoRoute;
