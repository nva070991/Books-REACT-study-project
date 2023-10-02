import { render, screen } from '@testing-library/react'
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Order from '../components/Order/Order'
import UserContext from '../contexts/Login'

let login = 1
const SetLogin = (l) => { login = l }
let Password = 1
const SetPassword = (l) => { Password = l }

describe('Order component', () => {
  it('should render Order component', () => {
    const view = render(
      <BrowserRouter>
        <UserContext.Provider value={{
          login, SetLogin, Password, SetPassword,
        }}
        >

          <Routes>
            <Route path="/" element={<Order />} />

          </Routes>
        </UserContext.Provider>
      </BrowserRouter>,
    )
    expect(view).toMatchSnapshot()
  })

  it('should render Total', () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={{
          login, SetLogin, Password, SetPassword,
        }}
        >

          <Routes>
            <Route path="/" element={<Order />} />

          </Routes>
        </UserContext.Provider>
      </BrowserRouter>,
    )

    expect(screen.getByTestId('total')).toHaveTextContent('0')
  })
})
