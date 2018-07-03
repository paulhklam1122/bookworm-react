import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'semantic-ui-react'

import InlineError from '../messages/InlineError'

const LoginForm = (props) => {
  const { email, errors, onChange, onSubmit, password } = props
  return (
    <Form onSubmit={onSubmit}>
      <Form.Field error={!!errors.email}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='example@example.com'
          value={email}
          onChange={(e) => onChange(e)}
        />
        {errors.email && <InlineError text={errors.email} />}
      </Form.Field>
      <Form.Field error={!!errors.password}>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          placeholder='make it secure'
          value={password}
          onChange={(e) => onChange(e)}
        />
        {errors.password && <InlineError text={errors.password} />}
      </Form.Field>
      <Button primary>Login</Button>
    </Form>
  )
}

LoginForm.defaultProps = {
  email: '',
  password: '',
  errors: {}
}

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  errors: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  }),
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default LoginForm
