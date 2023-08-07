import { Route, Routes } from "react-router-dom"
import FestivalsListPage from "../pages/FestivalsListPage/FestivalsListPage"
import FestivalDetailsPage from "../pages/FestivalDetailsPage/FestivalDetailsPage"
import NewFestivalPage from "../pages/NewFestivalPage/NewFestivalPage"
import SignupPage from "../pages/SignupPage/SignupPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import PrivateRoute from "./PrivateRoute"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>INICIO</h1>} />
            <Route path="/listado" element={<FestivalsListPage />} />
            <Route path="/crear" element={<NewFestivalPage />} />
            <Route path="/detalles/:festival_id" element={<FestivalDetailsPage />} />
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/iniciar-sesion" element={<LoginPage />} />

            <Route path="/perfil" element={<PrivateRoute />}>
                <Route path="" element={<ProfilePage />} />
            </Route>

            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes