import { Router } from 'express';
import { singUp, singIn } from '../controllers/auth/auth.controller';


// Constants
const router = Router();

router.post('/signup', singUp);
router.post('/signin', singIn);

// Export default
export default router;
