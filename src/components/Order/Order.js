/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState, React } from 'react'
import axios from 'axios'
import OrderDetail from './OrderDetail'
import Navigation from '../Navigation'
import '../../styles/styles.css'

function Order() {
  const [books, setBooks] = useState([])

  const Delete = (id) => {
    setBooks(
      books.filter((book) => (book.id !== id)),
    )
  }

  const Submit = () => {
    window.location.assign('http://localhost:3000/Order')
  }

  const loadBooks = () => {
    axios
      .get('https://api.jsonbin.io/v3/b/6515255a0574da7622b16f01')
      .then((response) => {
        setBooks(response.data.record)
      })
      .catch((err) => {
        console.log(err.message)
        alert('не смогли загрузить данные из API', err.message)
      })
  }

  useEffect(() => {
    loadBooks()
  }, [])

  const setQuatinty = (quantity, id) => {
    setBooks(
      books.map((book) => (Number(book.id) !== id ? book : { ...book, quantity })),
    )
  }

  function countTotal() {
    let totalQu = 0
    let totalPrice = 0
    for (let i = 0; i < books.length; i += 1) {
      totalQu += Number(books[i].quantity)
      totalPrice += (books[i].price * books[i].quantity)
    }
    return { totalQu, totalPrice }
  }

  useEffect(() => {
    countTotal()
  })

  return (
    <div style={{
      background: 'gray',

    }}
    >
      <Navigation />
      <div style={{
        background: 'gray',
        width: '100vw',
        height: '100vh',
        boxSizing: 'border-box',

      }}
      >
        <div
          className="background DivPadding"
          style={{

            display: 'flex',
            flexWrap: 'wrap',
            gap: '9px',
          }}
        >
          {books[0] ? books.map((book) => (
            <OrderDetail
              key={Number(book.id)}
              book={book}
              callback={setQuatinty}
              Delete={Delete}
            />
          )) : (
            <div style={{

              display: 'flex',
              width: '100vw',
              height: '100vh',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '25px',

            }}
            >
              Загрузка
            </div>
          )}

        </div>
        <div className="background">
          {' '}
          Total Quanity:
          {' '}
          <b>{countTotal().totalQu}</b>

        </div>
        <div className="background">
          {' '}
          Total Price:
          {' '}
          <b data-testid="total">{countTotal().totalPrice}</b>

        </div>
        <div className="background DivPadding">
          <button className="Buttons" onClick={Submit} type="button">Send order</button>
        </div>

      </div>

    </div>
  )
}

export default Order
