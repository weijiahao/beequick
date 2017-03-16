'use strict'

import Rem from './lib/rem'
import ReactCss from '../style/app.scss'
import React from 'react'
import ReactDom from 'react-dom'
import Index from './components/index'
import Features from './components/features'
import USBox from './components/USBox'
import Car from './components/car'
import Me from './components/me'
import Details from './components/details.jsx'

import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import TabBarActions from './flux/actions/TabBarActions'

let onEnterHandler = (type) => {
  TabBarActions.setItem(type)
}

ReactDom.render((
  <Router history={hashHistory}>
    <Route path='/' onEnter={onEnterHandler.bind(this, 'features')} component={Index}>
      <IndexRoute component={Features}></IndexRoute>
      <Route path='features' onEnter={onEnterHandler.bind(this, 'features')} component={Features}></Route>
      <Route path='USBox' onEnter={onEnterHandler.bind(this, 'USBox')} component={USBox}></Route>
      <Route path='Car' onEnter={onEnterHandler.bind(this, 'car')} component={Car}></Route>
      <Route path='Me' onEnter={onEnterHandler.bind(this, 'me')} component={Me}></Route>
    </Route>
    <Route path="/details/:id" component={Details}></Route>
  </Router>
  ), document.getElementById('app')
)
