import React from 'react'
import PropTypes from 'prop-types'

import LoginFormContainer from '../../containers/LoginFormContainer'

const LoginPage = (props) => (
  <div>
    <h1>Login</h1>
    <LoginFormContainer submit={props.submit}/>
  </div>
)

LoginPage.propTypes = {
  submit: PropTypes.func.isRequired
}

export default LoginPage
