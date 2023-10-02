/* eslint-disable prefer-const */
import { render, screen, fireEvent } from '@testing-library/react'
import { React } from 'react'
import MinMax from '../components/MinMax/MinMax'
import onChange from '../components/Order/OrderDetail'

let book = {
  id: '101',
  title: 'Война и мир - Л.Н.Толстой',
  price: '800',
  rest: '10',
  quantity: '2',
}

const setQuatinty = (e) => {
  book.quantity = e
}

describe('MinMax component', () => {
  it('should render MinMax component', () => {
    const view = render(<MinMax
      max={999}
      current={100}
      onChange={onChange}
    />)
    expect(view).toMatchSnapshot()
  })

  it('should contain +', () => {
    render(<MinMax
      max={999}
      current={100}
      onChange={onChange}
    />)
    expect(screen.getByText('+')).toBeInTheDocument()
  })

  it('should contain -', () => {
    render(<MinMax
      max={999}
      current={1}
      onChange={onChange}
    />)
    expect(screen.getAllByText('-').length).toBe(1)
  })
  it('should work button +', () => {
    const { rerender } = render(<MinMax
      max={Number(book.rest)}
      current={Number(book.quantity)}
      onChange={setQuatinty}
    />)
    const button = screen.getByTestId('button+')
    const input = screen.getByTestId('input')

    fireEvent.click(button)

    rerender(<MinMax
      max={Number(book.rest)}
      current={Number(book.quantity)}
      onChange={setQuatinty}
    />)

    expect(input.value).toBe('3')
  })
  it('should work button +', () => {
    const { rerender } = render(<MinMax
      max={Number(book.rest)}
      current={Number(book.quantity)}
      onChange={setQuatinty}
    />)
    const button = screen.getByTestId('button-')
    const input = screen.getByTestId('input')

    fireEvent.click(button)

    rerender(<MinMax
      max={Number(book.rest)}
      current={Number(book.quantity)}
      onChange={setQuatinty}
    />)

    expect(input.value).toBe('2')
  })
})
