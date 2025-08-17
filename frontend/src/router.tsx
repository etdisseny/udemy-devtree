import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginView } from './views/loginview';
import { RegisterView } from './views/registerview';
import { AuthLayout } from './layouts/authlayout';

export default function Router() {
    return(
        <BrowserRouter>
        <Routes>
            <Route element={<AuthLayout/>}>
                <Route path='/auth/login' element={<LoginView/>}/>
                <Route path='/auth/register' element={<RegisterView/>}/>
            </Route>

        </Routes>
        </BrowserRouter>
    )
}