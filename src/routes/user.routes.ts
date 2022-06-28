import { Request, Response, Router } from 'express';

// Constants
const router = Router();


router.get('/all', async (req: Request, res: Response) => {
    return res.status(200);
});

// Export default
export default router;
