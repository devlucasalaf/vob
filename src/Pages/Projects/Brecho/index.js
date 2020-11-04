import React, { useState } from 'react'
import './styless.css'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'

const Brecho = () => {

  const photos = [
    './banner-brecho.png',
    './banner-campanha-abraco.png',
    './banner-cantinho-leitura.png',
    './banner-doacao.png',
    './banner-leitura-livre.png'
  ]

  const [xCA, setXCA] = useState(-100)
  const [transTime, setTransTime] = useState(0.5)

  const handleLeft = () => {
    if (xCA === -100) {
      setXCA(xCA + 100)
      setTimeout(() => {
        setTransTime(0.0)
        setXCA(photos.length * -100)
      }, 501)
    } else {
      setTransTime(0.5)
      setXCA(xCA + 100)
    }
  }

  const handleRight = () => {
    if (xCA === -100 * photos.length) {
      setXCA(xCA - 100)
      setTimeout(() => {
        setTransTime(0.0)
        setXCA(-100)
      }, 501)
    } else {
      setTransTime(0.5)
      setXCA(xCA - 100)
    }
  }

  return (
    <div id='containerbrecho'>
      <div id='bannerbrecho'>
        <div id='text-banner'>
          <p>Projeto</p>
          <h1>BRECHÓ<br /> SOLIDÁRIO</h1>
        </div>
      </div>
      <div className='content-nucleo'>
        <div id='infinite-carrousel'>
          <div className='carrousel-photo' style={{ transform: `translateX(${xCA}%)`, transitionDuration: `${transTime}s` }}>
            <img alt='last' src={photos[photos.length - 1]}></img>
          </div>
          {photos.map((photo, index) => {
            return (
              <div key={index} className='carrousel-photo' style={{ transform: `translateX(${xCA}%)`, transitionDuration: `${transTime}s` }}>
                <img alt={index} src={photo}></img>
              </div>
            )
          })}
          <div className='carrousel-photo' style={{ transform: `translateX(${xCA}%)`, transitionDuration: `${transTime}s` }}>
            <img alt='first' src={photos[0]}></img>
          </div>
          <button onClick={handleLeft} className='btn-change-photo btn-change-left'><HiOutlineChevronLeft /></button>
          <button onClick={handleRight} className='btn-change-photo btn-change-right '><HiOutlineChevronRight /></button>
        </div>
        <p>
          O objetivo desse projeto é a arrecadação de roupas novas e/ou usadas (em bom estado)
          para a venda em brechós do Viver o BEM realizados periodicamente.<br /><br /> Todo o valor arrecadado
          através da venda das peças de roupas é direcionado para as demais ações e campanhas do grupo ou de instituições como asilos, orfanatos, etc.
        </p>
      </div>
      <div id='videos-content'>
        <iframe title='project-video' width="560" height="315" src="https://www.youtube.com/embed/glFNSQ8qVRM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>Ação com as crianças de Jardim Gramacho em novembro de 2019.</p>
      </div>
    </div>
  )
}

export default Brecho