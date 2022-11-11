import { Routes, Route } from 'react-router-dom';
import { RoutePath } from 'assets/types/routes';
import Home from "pages/Home/index";
import Register from 'pages/Register';
import Login from 'pages/Login';

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.REGISTER} element={<Register />} />
            <Route path={RoutePath.LOGIN} element={<Login />} />
            <Route path={RoutePath.HOME} element={<Home />} />
        </Routes>
    );
}

export default Router;