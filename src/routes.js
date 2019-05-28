import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/picture/:idPicture" component={Detail} />
    <Route path='*' component={ () => <h1> Pagina de error. 404 Not found</h1>} /> {}
  </Switch>
)

export default Routes;