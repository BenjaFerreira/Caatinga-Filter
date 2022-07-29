import Footer from "../../components/Footer/Footer"
import './cadastrese.css'


function Cadastrese(){
    return(
        <>
            <main>
                <section className="container-formulário">
                    <h2> Cadastre o seu Projeto</h2>
                    <div className="card-cadastro">
                        <form>
                            <label for="nome"> Qual o nome do seu projeto?</label>
                            <input type="text" name="nome" id="nome" placeholder="Digite o nome do projeto aqui"/>

                            <label for="email">Possue algum E-mail para contato?</label>
                            <input type="email" name="E-mail" id="email" placeholder="Ex. seunome@dominio.com"/>

                            <label for="ano"> A quanto tempo o seu projeto existe?</label>
                            <input type="number" name="ano" id="ano" min={0}/>

                            <label for="localizao">Onde o seu projeto se localiza?</label>
                            <input type="text" name="localizao" id="localizao" placeholder="Ex. Cidade/Estado"/>

                            <label for="parceria">Possui alguma parceria privada?</label>
                            <input type="text" name="parceria" id="parceria" placeholder="Ex. Sim/ Não"/>

                            <label for="vinculo">O seu projeto tem vinculo com alguma instituição pública?</label>
                            <input type="text" name="vinculo" id="parceria" placeholder="Ex. Nome da instituição"/>



                            <label for="Tipos-de-Projetos"> Em qual categoria se encaixa o seu projeto?</label>
                            <select name="Projetos" id="Projetos">
                                <option value="1">Biodiversidade</option>
                                <option value="2">Produção sustentável</option>
                                <option value="3">Agricultura Familiar</option>
                                <option value="4">Agroecologia</option>
                                <option value="5">Conservação de Fauna</option>
                                <option value="6">Clima</option>
                            </select>

                            <label for="mais-informacoes"> Conta pra gente um pouco mais sobre o seu projeto</label>
                            <textarea name="mais-informacoes" id="mais-informacoes"></textarea>

                            <label for="checked"> Você concorda com os termos de privacidade?</label>
                            <input type="checkbox" id="checked"/>

                            <div className="add-container">
                                <button
                                className='add-task'
                                type='submit'
                                >
                                    Enviar Formulário
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            <footer>
                <Footer> Feito por Benja Ferreira | Turma On17| 2022</Footer>
            </footer>
            <div className='cor-verde'></div>
        </>
    )
}
export default Cadastrese