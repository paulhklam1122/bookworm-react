import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'semantic-ui-react'

import InlineError from '../messages/InlineError'

const LoginForm = (props) => (
  <Form onSubmit={props.onSubmit}>
    <Form.Field error={!!props.errors.email}>
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        id='email'
        name='email'
        placeholder='example@example.com'
        value={props.email}
        onChange={(e) => props.onChange(e)}
      />
      {props.errors.email && <InlineError text={props.errors.email} />}
    </Form.Field>
    <Form.Field error={!!props.errors.password}>
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        id='password'
        name='password'
        placeholder='make it secure'
        value={props.password}
        onChange={(e) => props.onChange(e)}
      />
      {props.errors.password && <InlineError text={props.errors.password} />}
    </Form.Field>
    <Button primary>Login</Button>
  </Form>
)

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
