import {Router} from 'express'
import { createAuth } from './handlers';


const router = Router();

//routing
/*Auteticación y registro*/
router.post('/auth/register', createAuth)




export default router;