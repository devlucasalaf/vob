import React from 'react'
import './styless.css'
import { MdEmail } from 'react-icons/md'


const Footer = () => {
  return (
    <div id='containerFooter'>
      <div id='footer1'>
        <img src='/logotipoTransparente.png' alt='logotipo'></img>
        <p>
          Somos um grupo de jovens que tem como lema Viver o BEM, seja na prática ou em nossas
          redes sociais, compartilhando boas notícias. Nossa maior missão é colaborar com as pessoas
          que precisam de algum tipo de ajuda, sempre acompanhada de muita alegria e amor.
        </p>
        <div id='contactDiv'>
          <span id='emailIcon'><MdEmail /></span>
          <p>viverobemoficial@gmail.com</p>
        </div>
        <div id='socialMediaDivFooter'>
          <a href='https://instagram.com/viverobemoficial' id='instagramIcon'><img src='/instagramIcon.png' alt='instagramIcon'></img></a>
          <a href='https://www.facebook.com/viverobemoficial' id='facebookIcon'><img src='/facebookIcon.png' alt='faceIcon'></img></a>
          <a href='https://www.youtube.com/channel/UCf6wstVaWniYguRJvM4OeOg' id='youtubeIcon'><img src='/youtubeIcon.png' alt='youtubeIcon'></img></a>
          <a href='https://chat.whatsapp.com/HjSLAHk7ETvHBkGJnQMxX9' id='whatsappIcon'><img src='/whatsappIcon.png' alt='whatsappIcon'></img></a>
        </div>
      </div>
      <div id='footer2'>
        <div id='menuFooter'>
          <div className='menuDiv'>
            <h2>QUEM SOMOS</h2>
            <a href='/'>O VOB</a>
            <a href='/'>Histórico</a>
            <a href='/'>Transparência</a>
            <a href='/'>Equipe VOB</a>
          </div>
          <div className='menuDiv'>
            <h2>CONTEÚDOS</h2>
            <a href='/'>Calendário de Campanhas</a>
            <a href='/'>Campanhas</a>
            <a href='/'>Notícias</a>
          </div>
          <div className='menuDiv' id='helpDiv'>
            <h2>COMO AJUDAR</h2>
            <a href='/'>Seja voluntário</a>
            <a href='/'>Doações</a>
            <a href='/'>Apadrinhe uma família</a>
            <p id='colaboreText'><b>Colabore com a campanha do Apadrinhamento do Bem</b></p>
          </div>
          <div className='menuDiv' id='helpDiv'>
            <h2>CONTA PARA DOAÇÃO</h2>
            <p>Banco Bradesco (Next) - 237</p>
            <p>Ag.: 3925-0  /  CC.: 419751-8</p>
            <p>CPF.: 163.152.057-12</p>
            <p>TATIANE TOME AUGUSTO</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer