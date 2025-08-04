import {Router} from 'express'

const router = Router();

//routing
/*Auteticación y registro*/
router.post('/auth/register', (req, res)=>{ 
    console.log(req.body)
})




export default router;