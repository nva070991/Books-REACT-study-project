import { useState, React } from 'react'
import MinMax from '../MinMax/MinMax'
import props from './OrderProps'

function OrderDetail(prop) {
  const {
    book,
    callback,
    Delete,
  } = prop
  const [quantity, setBook] = useState(Number(book.quantity))

  const setQuatinty = (qu, id) => {
    setBook(qu)
    callback(String(qu), id)
  }
  return (
    <div style={{
      boxSizing: 'border-box',
      background: 'white',
      height: '300px',
      width: '300px',
      borderRadius: '10px',
      padding: '14px',
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <div>
        <button
          style={{
            background: 'red', height: '20px', width: '20px', borderRadius: '10px', border: 'none',
          }}
          type="button"
          className="buttons"
          onClick={() => Delete(book.id)}
        >
          X
        </button>

      </div>
      <div>

        <h3 data-testid="h3" style={{ height: '50px' }}>{book.title}</h3>

      </div>
      <div>
        Price
        {' '}
        {Number(book.price)}
        {' '}
        /
        {' '}
        {Number(book.price) * Number(quantity)}
      </div>
      <div style={{ marginTop: '25px' }}>
        Quanity
        {' '}
        {Number(book.quantity)}
      </div>
      <div>
        <a href={Number(book.id)}>Readmore</a>
      </div>
      <div style={{ marginTop: '25px' }}>
        <MinMax
          max={Number(book.rest)}
          current={Number(book.quantity)}
          onChange={(qu) => setQuatinty(qu, Number(book.id))}
        />
      </div>

    </div>
  )
}

OrderDetail.propTypes = props

export default OrderDetail
