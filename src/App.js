/* eslint-disable react/jsx-no-constructed-context-values */
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import React, { useState } from 'react'

import Error404 from './pages/Error404/index'
import LoginPass from './components/LoginPass'
import BookDesc from './components/BookDesc'

import Order from './components/Order/Order'
import About from './pages/About'

import UserContext from './contexts/Login'
import UserOrder from './components/UserOrder'
import Success from './pages/Success'

function App() {
  const [login, SetLogin] = useState(undefined)
  const [Password, SetPassword] = useState(undefined)

  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={{
          login, SetLogin, Password, SetPassword,
        }}
        >

          <Routes>
            { (localStorage.user && localStorage.password) ? <Route path="/" element={<Order type="module" />} />
              : <Route path="/" element={<LoginPass />} />}
            <Route path="/About" element={<About />} />
            <Route path="/:id" element={<BookDesc />} />
            <Route path="/Order" element={<UserOrder />} />
            <Route path="/Success" element={<Success />} />

            <Route path="/Error404" element={<Error404 />} />

          </Routes>
        </UserContext.Provider>
      </BrowserRouter>

    </div>
  )
}

export default App
