import {
  useContext, useState, React, useRef,
} from 'react'
import UserContext from '../contexts/Login'

function LoginPass() {
  const inputLog = useRef(null)
  const inpuPass = useRef(null)
  const context = useContext(UserContext)

  const [log, SetLog] = useState('')
  const [pass, SetPass] = useState('')
  const [logIsHidden, setlogIsHidde] = useState(false)
  const [pasIsHidden, setpasIsHidden] = useState(false)
  const [messageLog, SetMessageLog] = useState('')
  const [messagePas, SetMessagePas] = useState('')

  const Submit = () => {
    if (log === '' || (!(/\S+@\S+\.\S+/.test(log)))) {
      inputLog.current.focus()
    } else if (pass === '' || pass.length < 6) {
      inpuPass.current.focus()
    } else {
      context.SetLogin(log)
      context.SetPassword(pass)
      localStorage.user = log
      localStorage.password = pass
    }
  }

  const Parse = (id) => {
    if (id === 'login') {
      const { value } = inputLog.current

      SetLog(value)
    } else if (id === 'password') {
      const { value } = inpuPass.current

      SetPass(value)
    }
  }

  const Hide = (id) => {
    if (id === 'login') {
      if (log === '') {
        SetMessageLog('обязательно поле')
        setlogIsHidde(true)
      } else if (!(/\S+@\S+\.\S+/.test(log))) {
        SetMessageLog('введите e-mail')
        setlogIsHidde(true)
      } else {
        SetMessageLog('')
        setlogIsHidde(false)
      }
    } else if (id === 'password') {
      if (pass === '') {
        SetMessagePas('обязательно поле')

        setpasIsHidden(true)
      } else if (pass.length < 6) {
        SetMessagePas('минимальная длина пароля 6 символов')
        setpasIsHidden(true)
      } else {
        SetMessagePas('')
        setpasIsHidden(false)
      }
    }
  }

  const useInputRequired = (e) => {
    if (e.type === 'change') {
      Parse(e.target.id)
    }
    if (e.type === 'blur') {
      Hide(e.target.id)
    }
    if (e.type === 'submit') {
      e.preventDefault()

      Hide('login')
      Parse('login')
      Hide('password')
      Parse('password')

      Submit()
    }
  }

  return (
    <div className="DivPadding">

      <form onSubmit={useInputRequired}>
        <div>
          <div style={{ width: '250px', display: 'flex', justifyContent: 'space-between' }}>
            Login
            <input data-testid="login" ref={inputLog} type="text" value={log} id="login" onBlur={useInputRequired} onChange={useInputRequired} />

          </div>
          <div>
            {!logIsHidden
              ? ('')
              : (
                <div
                  data-testid="loghint"
                  style={{
                    width: '250px', display: 'flex', flexDirection: 'row-reverse', color: 'red', fontSize: '12px',
                  }}
                >
                  {messageLog}
                </div>
              )}

          </div>
          <div style={{ width: '250px', display: 'flex', justifyContent: 'space-between' }}>
            Password
            <input data-testid="password" ref={inpuPass} type="text" value={pass} id="password" onBlur={useInputRequired} onChange={useInputRequired} />

          </div>
          <div>
            {!pasIsHidden
              ? ('')
              : (
                <div
                  data-testid="pashint"
                  style={{
                    width: '250px', display: 'flex', flexDirection: 'row-reverse', color: 'red', fontSize: '12px',
                  }}
                >
                  {messagePas}
                </div>
              )}

          </div>
        </div>
        <button data-testid="button" type="submit">Войти</button>
      </form>
    </div>
  )
}

export default LoginPass
