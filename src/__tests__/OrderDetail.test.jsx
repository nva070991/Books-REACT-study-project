import { render, screen } from '@testing-library/react'
import React from 'react'
import OrderDetail from '../components/Order/OrderDetail'
import setQuatinty from '../components/Order/Order'

describe('OrderDetail component', () => {
  it('should render OrderDetail component', () => {
    const view = render(
      <OrderDetail
        book={{
          id: '101',
          title: 'Война и мир - Л.Н.Толстой',
          price: '800',
          rest: '10',
          quantity: '1',
        }}
        callback={setQuatinty}
      />,
    )
    expect(view).toMatchSnapshot()
  })

  it('should render Title', () => {
    render(<OrderDetail
      book={{
        id: '101',
        title: 'Война и мир - Л.Н.Толстой',
        price: '800',
        rest: '10',
        quantity: '1',
      }}
      callback={setQuatinty}
    />)
    expect(screen.getByTestId('h3')).toHaveTextContent('Война и мир - Л.Н.Толстой')
  })
})
