import { Route, Routes } from "react-router-dom"
import FestivalsListPage from "../pages/FestivalsListPage/FestivalsListPage"
import FestivalDetailsPage from "../pages/FestivalDetailsPage/FestivalDetailsPage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>INICIO</h1>} />
            <Route path="/listado" element={<FestivalsListPage />} />
            <Route path="/crear" element={<h1>CREAR FESTIVALES</h1>} />
            <Route path="/detalles/:festival_id" element={<FestivalDetailsPage />} />
            <Route path="/registro" element={<h1>REGISTRO</h1>} />
            <Route path="/iniciar-sesion" element={<h1>LOGIN</h1>} />
            <Route path="/perfil" element={<h1>PERFIL</h1>} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes