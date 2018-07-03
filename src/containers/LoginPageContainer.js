import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { login } from '../actions/auth'

import LoginPage from '../components/pages/LoginPage'

class LoginPageContainer extends Component {
  submit = (data) => {
    const { dispatch, history } = this.props
    dispatch(login(data)).then(() => history.push('/'))
  }

  render () {
    return (
      <LoginPage submit={this.submit} />
    )
  }
}

LoginPageContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default connect()(LoginPageContainer)
