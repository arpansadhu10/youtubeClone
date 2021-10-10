// const express = require("express")
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import morgan from 'morgan';
// const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser")
// const helmet = require("helmet");


const app = express();

import userRoute from './router/userRouter.js';
import videoRoute from './router/videoRouter.js';
import globalRoute from './router/globalRouter.js';
import routes from "./router/routers.js";

//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet()); // this is only for security of node applicstion
app.use(cookieParser());
app.use(bodyParser.json());
app.use(morgan("dev")); //for logging stuffs in the console

app.use(routes.home, globalRoute);
app.use(routes.users, userRoute);
app.use(routes.videos, videoRoute);


app.listen(3000, () => {
    console.log("server started on port 3000...");
})




// app.get("/", (req, res) => {
//     res.send("<h1>HELLOObfbO</h1>")
// })

// app.listen(3000, () => {
//     console.log("server started on port 3000...");
// })