import React, { Component } from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import Validator from 'validator'

import LoginForm from '../components/forms/LoginForm'

class LoginFormContainer extends Component {
  state = {
    data: {},
    loading: false,
    errors: {}
  }

  handleInputChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = () => {
    const errors = this.validate(this.state.data)
    this.setState({ errors })
    if (isEmpty(errors)) {
      this.props.submit(this.state.data)
    }
  }

  validate = (data) => {
    const errors = {}
    if (!Validator.isEmail(data.email)) errors.email = 'Invalid email'
    if (!data.password) errors.password = "Can't be blank"
    return errors
  }

  render () {
    return (
      <LoginForm
        email={this.state.data.email}
        password={this.state.data.password}
        errors={this.state.errors}
        onChange={this.handleInputChange}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

LoginFormContainer.propTypes = {
  submit: PropTypes.func.isRequired
}

export default LoginFormContainer
