import {BrowserRouter, Routes, Route} from 'react-router-dom '

import Home from '../pages/Home/Home'
import Caatinga from '../pages/Caatinga/Caatinga'
import Projetos from '../pages/Projetos/Projetos'
import Cadastrese from '../pages/Cadastrese/Cadastrese'
import Menu from '../components/Menu/Menu'

function ApplicationRoutes(){
    return(
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="caatinga" element={<Caatinga />} />
                <Route path="projetos" element={<Projetos />} />
                <Route path="cadastrese" element={<Cadastrese />} />
            </Routes>
        </BrowserRouter>
    )

}
export default ApplicationRoutes