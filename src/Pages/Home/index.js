import React, { useState, useEffect } from 'react'
import './styless.css'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'


const Home = () => {

  const [opacState, setOpacState] = useState(0)

  const bannerImages = [
    "./home-assets/banner-home-passado.png",
    "./home-assets/banner-home-futuro.png" 
  ]

  useEffect(() => {
    setTimeout(() => {
      if (opacState < (bannerImages.length - 1)) {
        setOpacState(opacState + 1)
      } else {
        setOpacState(0)
      }
    }, 6000)
  }, [opacState])

  const [xProject, setXProject] = useState(0)

  const swapLeft = () => {
    xProject === 0 ? setXProject(0) : setXProject(xProject + 100)
  }

  const swapRight = () => {
    xProject === -400 ? setXProject(-400) : setXProject(xProject - 100);
  }

  return (
    <div id='containerHome'>
      <div id='transition-images'>
        {bannerImages.map((item, index) => {
          return (
            <img id={opacState === index ? 'show-opacity' : 'hidden-opacity'} className='banner-images' key={index} src={item} alt={'imagem' + index}></img>
          )
        })}
      </div>
      <div id='vob-stats'>
        <p><b className='pink-stats'>+ de 6</b><br/>Anos</p>
        <p><b className='pink-stats'>+ de 80</b><br/>Campanhas</p>
        <p><b className='pink-stats'>+ de 100</b><br/>Voluntários</p>
        <p><b className='pink-stats'>25</b><br/>Famílias <br/> Apadrinhadas</p>
      </div>
      <div id='first-title-projects-home'>
        <h1 id='project-h1' className='project-titles'>CONHEÇA TODOS OS NOSSOS PROJETOS</h1>
        <p id='project-p' className='project-titles'>Há mais de 6 anos vivendo o BEM</p>
      </div>
      <div id='projects-slider'>
        <div className='slider-sheet' style={{ transform: `translateX(${xProject}%)` }} id='projeto-01'>
          <div className='sheet' id='sheet-1'>
            <p>Juntos somos mais fortes. Essa frase faz todo sentido para esse núcleo que adora uma parceria.</p>
            <a href='/leitura-livre'>VER MAIS</a>
          </div>
          <div className='title-div-h1'>
            <h1>Parceria</h1>
          </div>
        </div>
        <div className='slider-sheet' style={{ transform: `translateX(${xProject}%)` }} id='projeto-02'>
          <div className='sheet' id='sheet-1'>
            <p>Uma boa leitura faz bem a qualquer pessoa. Já imaginou uma estante de livros pública na sua praça/rua?</p>
            <a href='/leitura-livre'>VER MAIS</a>
          </div>
          <div className='title-div-h1'>
            <h1>Leitura Livre</h1>
          </div>
        </div>
        <div className='slider-sheet' style={{ transform: `translateX(${xProject}%)` }} id='projeto-03'>
          <div className='sheet' id='sheet-2'>
            <p>Sangue bom pra gente é aquele(a) que se doa e doa o seu sangue para salvar até 4 vidas. </p>
            <a href='/doacao-de-sangue'>VER MAIS</a>
          </div>
          <div className='title-div-h1'>
            <h1>Doação de Sangue</h1>
          </div>
        </div>
        <div className='slider-sheet' style={{ transform: `translateX(${xProject}%)` }} id='projeto-04'>
          <div className='sheet' id='sheet-3'>
            <p>Um abraço pode mudar o dia de uma pessoa. Um alimento também. Imagina agora uma campanha que une as duas coisas.</p>
            <a href='/campanha-do-abraco'>VER MAIS</a>
          </div>
          <div className='title-div-h1'>
            <h1>Campanha do Abraço</h1>
          </div>
        </div>
        <div className='slider-sheet' style={{ transform: `translateX(${xProject}%)` }} id='projeto-05'>
          <div className='sheet' id='sheet-4'>
            <p>As crianças são a nossa esperança de um futuro melhor. Mas é no presente que podemos fazer a diferença na vida delas.</p>
            <a href='/clubinho-da-leitura'>VER MAIS</a>
          </div>
          <div className='title-div-h1'>
            <h1>Clubinho da Leitura</h1>
          </div>
        </div>
        <div className='slider-sheet' style={{ transform: `translateX(${xProject}%)` }} id='projeto-06'>
          <div className='sheet' id='sheet-5'>
            <p>Aquela sua roupa nova (nunca usada) ou pouco usada (que você não usa mais) pode servir para alguém e ainda gerar recursos para os trabalhos do Viver o BEM.</p>
            <a href='/brecho-solidario'>VER MAIS</a>
          </div>
          <div className='title-div-h1'>
            <h1>Brechó Solidário</h1>
          </div>
        </div>
        <div className='slider-sheet' style={{ transform: `translateX(${xProject}%)` }} id='projeto-07'>
          <div className='sheet' id='sheet-6'>
            <p>Quer ser padrinho/madrinha de uma família em vulnerabilidade social/econômica e ajudar a compor a sua cesta básica? </p>
            <a href='/apadrinhamento-do-bem'>VER MAIS</a>
          </div>
          <div className='title-div-h1'>
            <h1>Apadrinhamento do Bem</h1>
          </div>
        </div>
        <div className='slider-sheet' style={{ transform: `translateX(${xProject}%)` }} id='projeto-08'>
          <div className='sheet' id='sheet-7'>
            <p>Quer participar dessa rede de auxílio para arrecadação de alimentos não perecíveis e roupas para quem mais precisa?</p>
            <a href='/caixote-solidario'>VER MAIS</a>
          </div>
          <div className='title-div-h1'>
            <h1>Caixote Solidário</h1>
          </div>
        </div>
        <button disabled={xProject === 0} className='btn-slider' onClick={swapLeft} id='button-left'><HiOutlineChevronLeft /></button>
        <button disabled={xProject === -400} className='btn-slider' onClick={swapRight} id='button-right'><HiOutlineChevronRight /></button>
      </div>
    </div>
  )
}

export default Home