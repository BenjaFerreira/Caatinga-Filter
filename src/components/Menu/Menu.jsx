import {Link} from 'react-router-dom'
import './menu.css'

function Menu() {
    return(
        <>
            <div className='cor-laranja'></div> 
            <div className='cor-azul'></div>
            <div className='menu-box'>

                <img className='logo' src='../src/assets/Logo2.svg'></img>
                <ul className='menu'>

                    <li className='item'>
                        <Link className='link' to="/Home">Home</Link>
                    </li>

                    <li className='item'>
                        <Link className='link' to="/caatinga">Caatinga</Link>
                    </li>

                    <li className='item'>
                        <Link className='link' to="/projetos">Projetos</Link>
                    </li>

                    <li className='item'>
                        <Link className='link' to="/cadastrese">Cadastre-se</Link>
                    </li>
                </ul>

            </div>
        </>
    )
}
export default Menu