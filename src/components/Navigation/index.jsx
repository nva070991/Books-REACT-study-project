/* eslint-disable import/no-extraneous-dependencies */
import { React } from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/styles.css'

export default function Navigation() {
  const handleLogOut = () => {
    localStorage.user = ''
    localStorage.password = ''
    window.location.href = '/'
  }
  return (
    <nav
      className="DivPadding"
      style={{
        background: 'inherit',
        display: 'flex',
        gap: '8px',
        width: '100vw',

      }}
    >
      <NavLink className="Nav" to="/">Home</NavLink>
      <NavLink className="Nav" to="/About">About</NavLink>
      <NavLink className="Nav" to="/Order">Order</NavLink>
      <NavLink className="Nav" onClick={handleLogOut}>
        Log out
      </NavLink>

    </nav>
  )
}
