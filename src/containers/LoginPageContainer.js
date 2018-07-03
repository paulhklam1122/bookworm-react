import React, { Component } from 'react'

import LoginPage from '../components/pages/LoginPage'

class LoginPageContainer extends Component {
  submit = (data) => {
    console.log(data)
  }

  render () {
    return (
      <LoginPage submit={this.submit} />
    )
  }
}

export default LoginPageContainer
