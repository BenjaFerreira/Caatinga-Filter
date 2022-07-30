import { useState, useEffect } from 'react'
import Footer from "../../components/Footer/Footer"
import { FiTrash2, FiPlus } from 'react-icons/fi'
import './caatinga.css'

function Caatinga(){
  const getLocalList = () => {
    let items = localStorage.getItem('list')
    if(items) {
      return JASON.parse(localStorage.getItem('list'))
    } else {
      return []
    }
  }
  const [list, setList] = useState ([getLocalList])
  const [newItem, setNewItem] = useState('')

  function handleCreateNewItem() {
    const item = {
      id: Math.random(),
      title: newItem
    }
    if(item.title === '') {
      return
    }
    setList([...list, item])
    setNewItem('')
  }

  function handleRemoveItem(id){
    const itemsFiltered = list.filter(item => item.id !== id)
    setList(itemsFiltered)

  }
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return(
    <>
      <main className="main">

          <h1>Caatinga: uma viagem ao coração do sol</h1>
        <section class="conteudo-principal">

          <div className="foto-flor">
            <img className="flor" src="../src/assets/closeup-of-a-spiny-pincushion-cactus-in-a-desert-garden.jpg" alt="flor" />
          </div>
          <p>Caatinga tem origem no tupi-guarani, e significa “mata branca”. Bioma exclusivamente brasileiro, carrega consigo uma biodiversidade imensa e uma cultura de resistência, esse é meu povo, como seu poder de resiliência. </p>
        </section>

        <div className="citacao">
          <blockquote>
            Dia desses, neste chão, nasceu uma flor rara. Flor dessas espécies difíceis de achar. Espécie de esperança. 
            A flor era daquela cor que só aparece nos nossos sonhos mais bonitos. Aqueles sonhos dos quais não queremos jamais
            acordar. Mas, digo, não foi sonho, foi real, eu juro: uma flor brotou neste solo. Por mais que tenham passado 
            a vida me dizendo que dele não sairia nada, a não ser matéria opaca para ser moldada, dando forma a potes que 
            guardariam a água, quando a água por um milagre viesse. - Fifa Lima
          </blockquote>
        </div>

        <div className="foto-caatinga">
          <img className="caatinga-paisagem" src="../src/assets/paisagem.jpg" alt=""/>
        </div>

        <section class="segunda-section">
          <div class="container-Caatinga background-Caatinga">
            <div class="container-Caatinga__texto">
              <h2>Aspectos geográficos</h2>
              <p>A Caatinga ocupa, aproximadamente, uma área de 734.478 km², correspondendo cerca de 70% da Região Nordeste e 11% do território nacional. Localiza-se em todos os estados do nordeste e do estremo norte de Minas Gerais.</p>
            </div>
              <img className='mapa' src="../src/assets/mapa-caatinga.png" alt="mapa"/>
          </div>
          <div class="container-Caatinga row-reverse">
            <div class="container-Caatinga__texto">
              <h2>Fauna e Flora</h2>
              <p>A fauna e a flora possuem características adaptativas aos períodos de estiagem. Sendo assim, suas plantas possuem troncos grossos e raízes profundas, enquanto que seus animais possuem estratégia para sobreviver ao calor, reduzindo a perda de água de seu corpo.</p>
            </div>
              <img className='mosaico' src="../src/assets/filter-4png.png" alt=""/>
          </div>
        </section>

        <section class="segunda-section">
          <div class="container-Caatinga background-Caatinga">
            <div class="container-Caatinga__texto">
              <h2>Ameaças à Caatinga</h2>
              <p>Por fim, é importante voltarmos os olhos a este bioma tão resiliente e diverso. Considerando seu alto grau de vulnerabilidade ambiental, a área sofre com constante desmatamento e queimadas em razão do desenvolvimento de atividades produtivas, como a produção de lenha e pecuária. Tal fato tem sido observado ao longo da história como precursores no processo de desertificação e precarização da vida de quem habita sua área. </p>
            </div>
            <img className='desmatamento' src="../src/assets/desmatamento.jpg" alt=""/>
          </div>
        </section> 

        <section className="list">
          <h2> Eiii, Vamos conversar sobre a Caatinga?</h2>
          <header>

            <div className="input-container">
              <input 
              type="text" 
              placeholder="Digite aqui"
              onChange={(e) => setNewItem(e.target.value)} 
              value={newItem}
              />

              <div className="add-container">
                <button 
                  className="add-task" 
                  type="submit" 
                  onClick={handleCreateNewItem}>
                    <FiPlus size={16} color="#FFFF"/>
                </button>

              </div>
            </div>
          </header>
          <main>
            <ul className='list-items'>
              {
                list.map(item => {
                  return(
                    <li key={item.id}>
                      <div>
                        <p>{item.title}</p>
                      </div>
                      <button 
                        className='remove-task' 
                        type='button' onClick={() => handleRemoveItem(item.id)}>
                          <FiTrash2 size={16} />
                      </button>
                    </li>
                  )
                })
              }
            </ul>
          </main>
        </section>

      </main>
      <footer>
        <Footer> Feito por Benja Ferreira - Aluna da Reprograma | Turma On17| 2022</Footer>
      </footer>
      <div className='cor-verde'></div>
    </>
  )
}
export default Caatinga