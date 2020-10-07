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
                <ButtonDropdown isOpen={dropdownOpen} toggle={dropDown}>
                  <DropdownToggle id='containerSubItems' caret>
                    <span id='buttonSubItems'>{dropdownOpen === false ? <HiOutlineChevronDown /> : <HiOutlineChevronUp />}</span>
                  </DropdownToggle>
                  <DropdownMenu className='divSubItems' id='divSubItems1'>
                    <a className='subItems' href='/'>O VOB</a>
                    <a className='subItems' href='/'>HISTÓRICO</a>
                    <a className='subItems' href='/'>TRANSPARÊNCIA</a>
                    <a className='subItems' href='/'>EQUIPE VOB</a>
                  </DropdownMenu>
                </ButtonDropdown>
              </div>
              <div className='collapseItems'>
                <a href='/'>NÚCLEOS</a>
                <ButtonDropdown isOpen={dropdownOpen2} toggle={dropDown2}>
                  <DropdownToggle id='containerSubItems' caret>
                    <span id='buttonSubItems'>{dropdownOpen2 === false ? <HiOutlineChevronDown /> : <HiOutlineChevronUp />}</span>
                  </DropdownToggle>
                  <DropdownMenu className='divSubItems' id='divSubItems2'>
                    <a className='subItems' href='/'>LEITURA LIVRE</a>
                    <a className='subItems' href='/'>PARCERIAS</a>
                    <a className='subItems' href='/'>DOAÇÃO DE SANGUE</a>
                    <a className='subItems' href='/'>CAMPANHA DO ABRAÇO</a>
                    <a className='subItems' href='/'>CLUBINHO DA LEITURA</a>
                    <a className='subItems' href='/'>BRECHÓ SOLIDÁRIO</a>
                    <a className='subItems' href='/'>APADRINHAMENTO DO BEM</a>
                    <a className='subItems' href='/'>CAIXOTE SOLIDÁRIO</a>
                  </DropdownMenu>
                </ButtonDropdown>
              </div>
              <div className='collapseItems'>
                <a href='/'>COMO AJUDAR</a>
                <ButtonDropdown isOpen={dropdownOpen3} toggle={dropDown3}>
                  <DropdownToggle id='containerSubItems' caret>
                    <span id='buttonSubItems'>{dropdownOpen3 === false ? <HiOutlineChevronDown /> : <HiOutlineChevronUp />}</span>
                  </DropdownToggle>
                  <DropdownMenu className='divSubItems' id='divSubItems3'>
                    <a className='subItems' href='/'>SEJA VOLUNTÁRIO</a>
                    <a className='subItems' href='/'>DOAÇÕES</a>
                    <a className='subItems' href='/'>APADRINHE UMA FAMÍLIA</a>
                  </DropdownMenu>
                </ButtonDropdown>
              </div>
              <div className='collapseItems'>
                <a href='/'>CONTEÚDOS</a>
                <ButtonDropdown isOpen={dropdownOpen4} toggle={dropDown4}>
                  <DropdownToggle id='containerSubItems' caret>
                    <span id='buttonSubItems'>{dropdownOpen4 === false ? <HiOutlineChevronDown /> : <HiOutlineChevronUp />}</span>
                  </DropdownToggle>
                  <DropdownMenu className='divSubItems' id='divSubItems4'>
                    <a className='subItems' href='/'>CALENDÁRIO DE CAMPANHAS</a>
                    <a className='subItems' href='/'>CAMPANHAS</a>
                    <a className='subItems' href='/'>NOTÍCIAS</a>
                  </DropdownMenu>
                </ButtonDropdown>
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