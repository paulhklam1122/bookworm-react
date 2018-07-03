import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import LoginPageContainer from './containers/LoginPageContainer'

const App = () => (
  <div className='ui container'>
    <Route path='/' exact component={HomePage} />
    <Route path='/login' exact component={LoginPageContainer} />
  </div>
)

export default App
