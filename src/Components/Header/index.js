import React, { useState } from 'react'
import './styless.css'
import { Collapse } from 'reactstrap'
import { HiOutlineX, HiOutlineMenu, HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi'
import { ButtonDropdown, DropdownToggle, DropdownMenu } from 'reactstrap'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [dropdownOpen, setOpen] = useState(false);
  const dropDown = () => setOpen(!dropdownOpen);

  const [dropdownOpen2, setOpen2] = useState(false);
  const dropDown2 = () => setOpen2(!dropdownOpen2);

  const [dropdownOpen3, setOpen3] = useState(false);
  const dropDown3 = () => setOpen3(!dropdownOpen3);

  const [dropdownOpen4, setOpen4] = useState(false);
  const dropDown4 = () => setOpen4(!dropdownOpen4);

  return (
    <div id='containerHeader'>
      <div id='headerElements'>
        <a href='/'><img src='/logotipoTransparente.png' alt='logotipo'></img></a>
        <div id='navBar'>
          <a href='/' id='homeA' className={window.location.href === 'http://localhost:3000/' ? 'nav1' : 'navBarButton'}>HOME</a>
          <div className='navBarDropdown'>
            <a className={window.location.href === 'http://localhost:3000/a' ? 'nav1' : 'navBarButton'} href='/'>QUEM SOMOS</a>
            <div className='navBarItens'>
              <span>white</span>
              <a href='/'>O VOB</a>
              <a href='/'>HISTÓRICO</a>
              <a href='/'>TRANSPARÊNCIA</a>
              <a href='/'>EQUIPE VOB</a>
            </div>
          </div>
          <div className='navBarDropdown'>
            <a className={window.location.href === 'http://localhost:3000/b' ? 'nav1' : 'navBarButton'} href='/'>NÚCLEOS</a>
            <div className='navBarItens'>
              <span>white</span>
              <a href='/'>PARCERIAS</a>
              <a href='/'>LEITURA LIVRE</a>
              <a href='/'>DOAÇÃO DE SANGUE</a>
              <a href='/'>CAMPANHA DO ABRAÇO</a>
              <a href='/'>CLUBINHO DA LEITURA</a>
              <a href='/'>BRECHÓ SOLIDÁRIO</a>
              <a href='/'>APADRINHAMENTO DO BEM</a>
              <a href='/'>CAIXOTE SOLIDÁRIO</a>
            </div>
          </div>
          <div className='navBarDropdown'>
            <a className={window.location.href === 'http://localhost:3000/c' ? 'nav1' : 'navBarButton'} href='/'>COMO AJUDAR</a>
            <div className='navBarItens'>
              <span>white</span>
              <a href='/'>SEJA VOLUNTÁRIO</a>
              <a href='/'>DOAÇÕES</a>
              <a href='/'>APADRINHE UMA FAMÍLIA</a>
            </div>
          </div>
          <div className='navBarDropdown'>
            <a className={window.location.href === 'http://localhost:3000/d' ? 'nav1' : 'navBarButton'} href='/'>CONTEÚDOS</a>
            <div className='navBarItens'>
              <span>white</span>
              <a href='/'>CALENDÁRIO DE CAMPANHAS</a>
              <a href='/'>CAMPANHAS</a>
              <a href='/'>NOTÍCIAS</a>
            </div>
          </div>
          <a href='/' id='contatoA' className={window.location.href === 'http://localhost:3000/e' ? 'nav1' : 'navBarButton'}>CONTATO</a>
          <a href='/' className='doeButton'>DOE AGORA</a>
        </div>
        <div id='menuPizza'>
          <button onClick={toggle}>{isOpen === false ? <HiOutlineMenu /> : <HiOutlineX />}</button>
          <div id='collapseDiv'>
            <Collapse isOpen={isOpen}>
              <div className='collapseItems'>
                <a href='/'>HOME</a>
              </div>
              <div className='collapseItems'>
                <a href='/'>QUEM SOMOS</a>
                <button onClick={dropDown} className='buttonSubItems'>{dropdownOpen === false ? <HiOutlineChevronDown /> : <HiOutlineChevronUp />}</button>
              </div>
              <div className={dropdownOpen === false ? 'blockDiv' : 'blockDivOn'}>
                <a className='subItemsn' href='/'>O VOB</a>
                <a className='subItemsn' href='/'>HISTÓRICO</a>
                <a className='subItemsn' href='/'>TRANSPARÊNCIA</a>
                <a className='subItemsn' href='/'>EQUIPE VOB</a>
              </div>
              <div className='collapseItems'>
                <a href='/'>NÚCLEOS</a>
                <button onClick={dropDown2} className='buttonSubItems'>{dropdownOpen2 === false ? <HiOutlineChevronDown /> : <HiOutlineChevronUp />}</button>
              </div>
              <div className={dropdownOpen2 === false ? 'blockDiv' : 'blockDivOn'}>
                <a className='subItemsn' href='/'>LEITURA LIVRE</a>
                <a className='subItemsn' href='/'>PARCERIAS</a>
                <a className='subItemsn' href='/'>DOAÇÃO DE SANGUE</a>
                <a className='subItemsn' href='/'>CAMPANHA DO ABRAÇO</a>
                <a className='subItemsn' href='/'>CLUBINHO DA LEITURA</a>
                <a className='subItemsn' href='/'>BRECHÓ SOLIDÁRIO</a>
                <a className='subItemsn' href='/'>APADRINHAMENTO DO BEM</a>
                <a className='subItemsn' href='/'>CAIXOTE SOLIDÁRIO</a>
              </div>
              <div className='collapseItems'>
                <a href='/'>COMO AJUDAR</a>
                <button onClick={dropDown3} className='buttonSubItems'>{dropdownOpen3 === false ? <HiOutlineChevronDown /> : <HiOutlineChevronUp />}</button>
              </div>
              <div className={dropdownOpen3 === false ? 'blockDiv' : 'blockDivOn'}>
                <a className='subItemsn' href='/'>SEJA VOLUNTÁRIO</a>
                <a className='subItemsn' href='/'>DOAÇÕES</a>
                <a className='subItemsn' href='/'>APADRINHE UMA FAMÍLIA</a>
              </div>
              <div className='collapseItems'>
                <a href='/'>CONTEÚDOS</a>
                <button onClick={dropDown4} className='buttonSubItems'>{dropdownOpen4 === false ? <HiOutlineChevronDown /> : <HiOutlineChevronUp />}</button>
              </div>
              <div className={dropdownOpen4 === false ? 'blockDiv' : 'blockDivOn'}>
                <a className='subItemsn' href='/'>CALENDÁRIO DE CAMPANHAS</a>
                <a className='subItemsn' href='/'>CAMPANHAS</a>
                <a className='subItemsn' href='/'>NOTÍCIAS</a>
              </div>
              <div className='collapseItems'>
                <a href='/'>CONTATO</a>
              </div>
              <div className='collapseItems'>
                <a href='/'>DOE AGORA</a>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Header