import React from 'react'
import PropTypes from 'prop-types'
import ReducerRunner from './reducer-runner'

const Button = ({style, label, onClick}) => (
  <button style={style} value={label} onclick={onClick} />
)

Button.propTypes = {
  style: PropTypes.object,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button