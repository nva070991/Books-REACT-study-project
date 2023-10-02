/* eslint-disable no-restricted-globals */
import React from 'react'
import { useParams } from 'react-router-dom'
import Navigation from './Navigation'
import booksStub from './Order/bookStub'
import '../styles/styles.css'

function BookDesc() {
  const { id } = useParams()
  if (isNaN(Number(id))) { window.location.href = '/Error404' }

  const book = booksStub().filter((item) => (item.id === Number(id)))[0]
  if (book === undefined) { window.location.href = '/Error404' }

  return (
    <div className="DivPadding">
      <Navigation />
      Book
      {' '}
      {book.title}
      <br />
      Price
      {' '}
      {book.price}

    </div>
  )
}

export default BookDesc
