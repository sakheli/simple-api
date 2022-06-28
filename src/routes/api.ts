import { Router } from 'express';
import userRouter from './user.routes';
import authRouter from './auth.routes';
import postRouter from './post.routes';


// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/users', userRouter);
baseRouter.use('/auth', authRouter);
baseRouter.use('/posts', postRouter);

// Export default.
export default baseRouter;
