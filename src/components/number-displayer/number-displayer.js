import React from 'react'
// import PropTypes from 'prop-types'
import numProvider from '../../classes/number-provider'


const NumberDisplayer = function NumberDisplayer() {
  const [doubleVal, setDoubleVal] = React.useState('')
  const [squareVal, setSquareVal] = React.useState('')

  const handleDoubleInputChange = (e) => {
    console.log(e.target.value)

    setDoubleVal(numProvider.double(e.target.value))
  }

  const handleSquareInputChange = (e) => {
    console.log(e.target.value)

    setSquareVal(numProvider.square(e.target.value))
  }

  return (
    <div style={{ position: 'absolute', left: '50%', top: '5%', transform: 'translateX(-50%)', width: '300px' }}>
      <div style={{ padding: '20px' }}>
        <label style={{ padding: '5px' }}>Double</label>
        <input style={{ padding: '5px' }} type="text" onChange={handleDoubleInputChange} />
        <span style={{ padding: '5px' }}>{doubleVal}</span>
      </div>
      <div style={{ padding: '20px' }}>
        <label style={{ padding: '5px' }}>Square</label>
        <input style={{ padding: '5px' }} type="text" onChange={handleSquareInputChange} />
        <span style={{ padding: '5px' }}>{squareVal}</span>
      </div>
    </div>
  )
}

// NumberDisplayer.propTypes = {
// }

export default NumberDisplayer
