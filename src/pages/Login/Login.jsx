import React from 'react'
import './Login.css'
<<<<<<< HEAD
import { Button, Container, Form, FormControl, FormGroup, FormLabel} from 'react-bootstrap'
=======
import { Container, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
>>>>>>> 5add9bc12c5d9cdaed0cd7fbd7bf3cf013f717e1
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
          <Button type='submit'>Iniciar sesión</Button>
        </Form>
      </Container>
    </div>


  )
}

export default Login