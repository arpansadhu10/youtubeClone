// import app from './index';
import userRoute from './router/userRouter.js';
import videoRoute from './router/videoRouter.js';
import app from './index'


app.use("/user", userRoute);
app.use("/video", videoRoute);


app.listen(3000, () => {
    console.log("server started on port 3000...");
})
