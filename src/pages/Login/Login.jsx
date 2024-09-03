import React from 'react'
import './Login.css'
import { Container, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur' });
  return (
    <div className='login'>
      <Container fluid className='container-form'>
        <h2>L O G I N</h2>
        <Form>
          <FormGroup>
            <FormLabel>Ingresa tu correo:</FormLabel>
            <FormControl
              type='email'
              name='email'
              {...register('email', {
                required: 'El email es requerido',
                minLength: {
                  value: 12,
                  message: 'El correo debe tener mas de 10 caracteres en total'

                },
                maxLength: {
                  value: 40,
                  message: 'El correo no debe tener mas de 40 caracteres en total'
                }

              })}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Ingresa tu contraseña:</FormLabel>
            <FormControl
              type='password'
              name='password'
              {...register('password', {
                required: 'La contraseña es requerido',
                minLength: {
                  value: 6,
                  message: 'La contraseñao debe tener al menos 6 caracteres'

                },
                maxLength: {
                  value: 20,
                  message: 'La contraseña no debe tener mas de 20 caracteres en total'
                }

              })}
            />
          </FormGroup>
        </Form>
      </Container>
    </div>


  )
}

export default Login