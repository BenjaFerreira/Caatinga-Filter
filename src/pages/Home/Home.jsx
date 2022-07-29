import './home.css'
import Header from '../../components/Header/Header'
import image from '../../assets/undraw_file_searching_re_3evy(2).svg'
import Footer from '../../components/Footer/Footer'

function Home(){
    return(
        <>
            <Header image={image} description=""></Header>

            <section className="pesquisar">
                <header>
                    <div className="list-container">
                        <input type="text" placeholder="Já conhece algum projeto?"/>
                        <div className="add-list">
                            <button
                            className='add-tsk'
                            type='submit'
                            >
                                Pesquisar
                            </button>
                        </div>
                    </div>
                </header>
            </section>
                <div className='xilogravura'>
                    <img className='xilo' src='../src/assets/xilo.svg' alt='Xilo' />
                </div>
            <div className='cor-marrom'></div>
            <footer>
                <Footer> Feito por Benja Ferreira - Aluna da Reprograma | Turma On17| 2022</Footer>
            </footer>
            <div className='cor-verde'></div>
        </>
    )
}
export default Home