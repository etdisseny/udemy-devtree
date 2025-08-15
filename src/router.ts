import {Router} from 'express'
import {body} from 'express-validator'; // Importamos express-validator para validaciones
import { createAuth, login } from './handlers';


const router = Router();

//routing
/*Auteticación y registro*/
router.post('/auth/register',
    body('handle').notEmpty().withMessage('El handle es obligatorio'),
    body('name').notEmpty().withMessage('El nombre es obligatorio'),
    body('email').isEmail().withMessage('El email debe ser válido'),
    body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
     createAuth)

router.post('/auth/login',
    body('email').isEmail().withMessage('El email debe ser válido'),
    body('password').notEmpty().withMessage('El password es obligatorio'),
     login)


export default router;