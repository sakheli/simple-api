import { Router } from 'express';
import { addPost, editPost } from '../controllers/post.controller';
import { getPosts, deletePost, getPost } from '../controllers/post.controller';
import { authUser } from '../middlewares/auth/auth.middleware';


// Constants
const router = Router();

router.get('/single/:id', getPost);
router.put('/single/:id', authUser, editPost);
router.delete('/single/:id', authUser, deletePost);
router.get('/all', getPosts);
router.post('/add', authUser, addPost);

// Export default
export default router;
