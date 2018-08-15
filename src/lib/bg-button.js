import { connect } from 'react-redux'
import ReducerRunner from './reducer-runner'
import Button from './button'

const bgColors = [
  '#FFF',
  '#F00',
  '#0F0',
  '#00F',
  '#000',
]
bgColors.nextColor = curr => {
  if ( this.indexOf(curr) === (this.length - 1) ) {
    return this[0]
  }
  return this.indexOf(curr) + 1
}

export const clickAction = (current) => ({
  type: 'BUTTON_CLICK',
  bg: bgColors.nextColor(current)
})

const mapStateToProps = (state, ownProps) => ({
  style : {
    'background-color': state.bg || bgColors[0],
  }
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(clickAction(ownProps.bg))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button)