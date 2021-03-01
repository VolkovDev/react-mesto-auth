import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login({ onFail, handleAuthorize }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function emailHandleChange(e) {
    setEmail(e.target.value)
  }

  function passwordHandleChange(e) {
    setPassword(e.target.value)
  }

  const resetForm = () => {
    setEmail('')
    setPassword('')
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()

    if (!email || !password) {
      console.error('Не заполнены некоторые обязательные поля')
    }

    handleAuthorize({ password, email })

    resetForm()
  }

  return (
    <div className='auth'>
      <h2 className='auth__title'>Вход</h2>
      <form className='auth__form' onSubmit={handleSubmit}>
        <input
          className='auth__input'
          type='email'
          required={true}
          placeholder='Email'
          onChange={emailHandleChange}
          value={email}
        />
        <div className='auth__input-container'>
          <input
            className='auth__input'
            type='password'
            placeholder='Пароль'
            onChange={passwordHandleChange}
            value={password}
          />
          <p className='auth__error-field'>{onFail}</p>
        </div>
        <button type='submit' className='auth__submit-btn'>
          Войти
        </button>
        <Link className='auth__sign-in' to='/signup'>
          Ещё не зарегистрированы? Регистрация
        </Link>
      </form>
    </div>
  )
}

export default Login