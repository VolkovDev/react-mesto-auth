import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = ({ handleRegister }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function emailHandleChange(e) {
    setEmail(e.target.value)
  }

  function passwordHandleChange(e) {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('password: ', password, ' email: ', email)
    handleRegister({ password, email })
  }

  return (
    <div className='auth'>
      <h2 className='auth__title'>Регистрация</h2>
      <form className='auth__form' onSubmit={handleSubmit}>
        <input
          className='auth__input'
          type='email'
          placeholder='Email'
          required={true}
          onChange={emailHandleChange}
          value={email}
        />
        <input
          className='auth__input'
          type='password'
          placeholder='Пароль'
          required={true}
          onChange={passwordHandleChange}
          value={password}
        />
        <button type='submit' className='auth__submit-btn'>
          Зарегистрироваться
        </button>
        <Link className='auth__sign-in' to='/signin'>
          Уже зарегистрированы? Войти
        </Link>
      </form>
    </div>
  )
}

export default Register