import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../src/Pages/Home'
import Abraco from '../src/Pages/Projects/Abraco'
import Brecho from '../src/Pages/Projects/Brecho'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/campanha-do-abraco' component={Abraco}></Route>
        <Route exact path='/brecho-solidario' component={Brecho}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes