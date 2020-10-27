import React, { useState } from 'react'
import './styless.css'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'

const Abraco = () => {

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
    <div id='containerLeitura'>
      <div id='bannerLeitura'>
        <div id='text-banner'>
          <p>Projeto</p>
          <h1>CAMPANHA<br /> DO ABRAÇO</h1>
        </div>
      </div>
      <div className='content-nucleo'>
        <div id='infinite-carrousel'>
          <div className='carrousel-photo' style={{ transform: `translateX(${xCA}%)`, transitionDuration: `${transTime}s` }}>
            <img src={photos[photos.length - 1]}></img>
          </div>
          {photos.map((photo, index) => {
            return (
              <div key={index} className='carrousel-photo' style={{ transform: `translateX(${xCA}%)`, transitionDuration: `${transTime}s` }}>
                <img src={photo}></img>
              </div>
            )
          })}
          <div className='carrousel-photo' style={{ transform: `translateX(${xCA}%)`, transitionDuration: `${transTime}s` }}>
            <img src={photos[0]}></img>
          </div>
          <button onClick={handleLeft} className='btn-change-photo btn-change-left'><HiOutlineChevronLeft /></button>
          <button onClick={handleRight} className='btn-change-photo btn-change-right '><HiOutlineChevronRight /></button>
        </div>
        <p>
          Essa campanha tem como objetivo trocar abraços por itens materiais (alimentos não perecíveis, itens de higiene pessoal, etc.) utilizados em ações do Viver o BEM e/ou requisitados por instituições parceiras (asilos, orfanatos, casas de apoio, etc.).<br /> <br />É realizada na porta de supermercados, onde nossos integrantes recebem com muito carinho as doações e direcionam aos locais pré-definidos.
        <br /> <br /> Alguns exemplos de instituições parceiras são: o Lar mãe Ritinha (Irajá/RJ), a Casa de Apoio à Criança com Câncer (Colégio/RJ) e a Casa de Joel (Cordovil/RJ).
        </p>
      </div>
      <div id='videos-content'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/glFNSQ8qVRM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>Ação com as crianças de Jardim Gramacho em novembro de 2019.</p>
      </div>
    </div>
  )
}

export default Abraco