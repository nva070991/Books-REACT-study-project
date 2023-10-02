/* eslint-disable no-restricted-globals */
import React, { useContext } from 'react'
import Navigation from './Navigation'
// import booksStub from './Order/bookStub'
import '../styles/styles.css'
import UserContext from '../contexts/Login'

function UserOrder() {
  const context = useContext(UserContext)

  console.log(context)

  const handleClick = () => {
    window.location.assign = ('http://localhost:3000/')
  }

  const Submit = () => {
    window.location.assign('http://localhost:3000/Success')
  }

  return (
    <div className="DivPadding background">
      <Navigation />
      <br />
      <form action="*">
        <div className="FlexDivColumn">
          Email
          <input defaultValue={context.login} id="email" type="text" />
          Phone
          <input type="text" />
          Name
          <input type="text" />
        </div>
        <div>
          <br />
          <button className="Buttons" onClick={handleClick} type="button">Back to cart</button>
          <br />
          <br />

          <button className="Buttons" onClick={Submit} type="button">Send</button>
        </div>
      </form>

    </div>
  )
}

export default UserOrder
