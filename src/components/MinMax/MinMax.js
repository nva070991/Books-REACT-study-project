import React from 'react'
import props from './MinMaxProps'

function MinMax(prop) {
  const {
    min, max, current, onChange,
  } = prop

  function applyCurrent(num) {
    const validNum = Math.max(min, Math.min(max, num))
    onChange(validNum)
  }

  function parseCurrent(e) {
    const num = parseInt(e.target.value, 10)
    applyCurrent(Number.isNaN(num) ? min : num)
  }

  const inc = () => applyCurrent(Number(current) + 1)
  const dec = () => applyCurrent(Number(current) - 1)

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <button
        data-testid="button-"
        style={{
          background: 'red', height: '45px', width: '45px', borderRadius: '10px', border: 'none',
        }}
        type="button"
        onClick={dec}
      >
        <span style={{
          color: 'white', fontSize: '30px',
        }}
        >
          -
        </span>
      </button>
      <input data-testid="input" type="hidden" value={current} onChange={parseCurrent} />
      <button
        data-testid="button+"
        type="button"
        onClick={inc}
        style={{
          background: 'green', height: '45px', width: '45px', borderRadius: '10px', border: 'none',
        }}
      >
        <span style={{
          color: 'white', fontSize: '30px',
        }}
        >
          +

        </span>
      </button>
    </div>
  )
}

MinMax.propTypes = props

MinMax.defaultProps = { min: 1 }

export default MinMax
