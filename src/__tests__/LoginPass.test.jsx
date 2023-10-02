import { render, screen, fireEvent } from '@testing-library/react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import React from 'react'
import UserContext from '../contexts/Login'

import LoginPass from '../components/LoginPass'

let login = 1
const SetLogin = (l) => { login = l }
let Password = 1
const SetPassword = (l) => { Password = l }

describe('LoginPass component', () => {
  it('should render LoginPass component', () => {
    const view = render(
      <BrowserRouter>
        <UserContext.Provider value={{
          login, SetLogin, Password, SetPassword,
        }}
        >

          <Routes>
            <Route path="/" element={<LoginPass />} />

          </Routes>
        </UserContext.Provider>
      </BrowserRouter>,
    )
    expect(view).toMatchSnapshot()
  })
  it('should work tips', () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={{
          login, SetLogin, Password, SetPassword,
        }}
        >

          <Routes>
            <Route path="/" element={<LoginPass />} />

          </Routes>
        </UserContext.Provider>
      </BrowserRouter>,
    )

    const button = screen.getByTestId('button')

    fireEvent.click(button)

    expect(screen.getByTestId('pashint')).toHaveTextContent('обязательно поле')
    expect(screen.getByTestId('loghint')).toHaveTextContent('обязательно поле')
  })
})
