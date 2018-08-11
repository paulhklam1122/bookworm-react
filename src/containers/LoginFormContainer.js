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
    const { data } = this.state
    const { submit } = this.props
    const errors = this.validate(data)
    this.setState({ errors })
    if (isEmpty(errors)) {
      submit(data).catch(err => this.setState({ errors: err.response.data.errors }))
    }
  }

  validate = (data) => {
    const errors = {}
    if (!Validator.isEmail(data.email)) errors.email = 'Invalid email'
    if (!data.password) errors.password = "Can't be blank"
    return errors
  }

  render () {
    const { data, errors } = this.state
    return (
      <LoginForm
        email={data.email}
        password={data.password}
        errors={errors}
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
