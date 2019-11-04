import React from 'react'
import { connect } from 'react-redux'
import { changeMessage } from '../reducers/notificationReducer';

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  
  if(props.message) {
    setTimeout(() => {
      props.changeMessage('')
    }, 5000);
    return (
      <div style={style}>
        {props.message}
      </div>
    )
  }
  
  return null
}

const mapStateToProps = (state) => {
  return {
    message: state.message
  }
}

export default connect(mapStateToProps, {changeMessage})(Notification)