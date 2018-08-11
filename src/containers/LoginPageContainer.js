import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { login } from '../actions/auth'

import LoginFormContainer from './LoginFormContainer';

class LoginPageContainer extends Component {
  submit = data =>
    this.props.login(data).then(() => this.props.history.push('/'))

  render () {
    return (
      <LoginFormContainer submit={this.submit} />
    )
  }
}

LoginPageContainer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default connect(null, { login })(LoginPageContainer)
