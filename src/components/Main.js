import React from 'react'
import Card from './Card'
import { CurrentUserContext } from "../contexts/CurrentUserContext"

function Main(props) {
  const { name, about, avatar } = React.useContext(CurrentUserContext)

  return (
    <>
      <main className='content'>
        <section className='profile'>
          <div
            className='profile__avatar-container'
            onClick={props.onEditAvatar}>
            <img
              src={avatar}
              alt={name}
              className='profile__avatar'
            />
          </div>
          <div className='profile__info'>
            <h1 className='profile__name'>{name}</h1>
            <button
              className='profile__edit-button'
              type='button'
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className='profile__hobby'>{about}</p>
          <button
            className='profile__add-button'
            type='button'
            onClick={props.onAddPlace}></button>
        </section>

        <section className='cards'>
          {props.cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onCardImageClick={props.onCardImageClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
              loadingIndicator={props.loadingIndicator}
              {...props}
            />
          ))}
        </section>
      </main>
    </>
  )
}
export default Main