import React, { useState, useEffect } from 'react'
import './styless.css'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'

const Home = () => {

  const [opacState, setOpacState] = useState(0)

  const images = [
    './banner-brecho.png',
    './banner-campanha-abraco.png',
    './banner-cantinho-leitura.png',
    './banner-doacao.png',
    './banner-leitura-livre.png'
  ]

  useEffect(() => {
    setTimeout(() => {
      if (opacState < (images.length - 1)) {
        setOpacState(opacState + 1)
      } else {
        setOpacState(0)
      }
    }, 8000)
  }, [opacState])

  const [xProject, setXProject] = useState(0)

  const swapLeft = () => {
    xProject === 0 ? setXProject(0) : setXProject(xProject + 100)
  }

  const swapRight = () => {
    xProject === -300 ? setXProject(-300) : setXProject(xProject - 100);
  }

  console.log(xProject)

  return (
    <div id='containerHome'>
      <div id='transition-images'>
        {images.map((item, index) => {
          return (
            <img id={opacState === index ? 'show-opacity' : 'hidden-opacity'} className='banner-images' key={index} src={item}></img>
          )
        })}
      </div>
      <h1 id='project-h1' className='project-titles'>CONHEÇA TODOS OS NOSSOS PROJETOS</h1>
      <p id='project-p' className='project-titles'>Há mais de 6 anos vivendo o BEM</p>
      <div id='projects-slider'>
        <div className='slider-sheet' style={{ transform: `translateX(${xProject}%)` }} id='projeto-01'>
          <div className='sheet' id='sheet-1'>
            <p>Este é um dos projetos mais brabos que tem.</p>
            <a href='/leitura-livre'>VER MAIS</a>
          </div>
          <div className='title-div-h1'>
            <h1>Leitura Livre</h1>
          </div>
        </div>
        <div className='slider-sheet' style={{ transform: `translateX(${xProject}%)` }} id='projeto-02'>
          <div className='sheet' id='sheet-2'>
            <p>Este é um dos projetos mais brabos que tem.</p>
            <a href='/doacao-de-sangue'>VER MAIS</a>
          </div>
          <div className='title-div-h1'>
            <h1>Doação de Sangue</h1>
          </div>
        </div>
        <div className='slider-sheet' style={{ transform: `translateX(${xProject}%)` }} id='projeto-03'>
          <div className='sheet' id='sheet-3'>
            <p>Este é um dos projetos mais brabos que tem.</p>
            <a href='/campanha-do-abraco'>VER MAIS</a>
          </div>
          <div className='title-div-h1'>
            <h1>Campanha do Abraço</h1>
          </div>
        </div>
        <div className='slider-sheet' style={{ transform: `translateX(${xProject}%)` }} id='projeto-04'>
          <div className='sheet' id='sheet-4'>
            <p>Este é um dos projetos mais brabos que tem.</p>
            <a href='/clubinho-da-leitura'>VER MAIS</a>
          </div>
          <div className='title-div-h1'>
            <h1>Clubinho da Leitura</h1>
          </div>
        </div>
        <div className='slider-sheet' style={{ transform: `translateX(${xProject}%)` }} id='projeto-05'>
          <div className='sheet' id='sheet-5'>
            <p>Este é um dos projetos mais brabos que tem.</p>
            <a href='/brecho-solidario'>VER MAIS</a>
          </div>
          <div className='title-div-h1'>
            <h1>Brechó Solidário</h1>
          </div>
        </div>
        <div className='slider-sheet' style={{ transform: `translateX(${xProject}%)` }} id='projeto-06'>
          <div className='sheet' id='sheet-6'>
            <p>Este é um dos projetos mais brabos que tem.</p>
            <a href='/apadrinhamento-do-bem'>VER MAIS</a>
          </div>
          <div className='title-div-h1'>
            <h1>Apadrinhamento do Bem</h1>
          </div>
        </div>
        <div className='slider-sheet' style={{ transform: `translateX(${xProject}%)` }} id='projeto-07'>
          <div className='sheet' id='sheet-7'>
            <p>Este é um dos projetos mais brabos que tem.</p>
            <a href='/caixote-solidario'>VER MAIS</a>
          </div>
          <div className='title-div-h1'>
            <h1>Caixote Solidário</h1>
          </div>
        </div>
        <button disabled={xProject === 0} className='btn-slider' onClick={swapLeft} id='button-left'><HiOutlineChevronLeft /></button>
        <button disabled={xProject === -300} className='btn-slider' onClick={swapRight} id='button-right'><HiOutlineChevronRight /></button>
      </div>
    </div>
  )
}

export default Home