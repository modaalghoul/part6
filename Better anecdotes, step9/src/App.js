import React from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/Anecdotes'
import Notification from "./components/Notification"
import { changeMessage } from './reducers/notificationReducer'
import Filter from './components/Filter'

const App = (props) => {

  const showNotification = () => {
    if (props.store.getState().message !== '') {
      setTimeout(() => {
        props.store.dispatch(changeMessage(''))
      }, 5000)
      
      return <Notification store={props.store}/>
    }
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {showNotification()}
      <Filter store={props.store} />
      <AnecdoteForm store={props.store} />
      <AnecdoteList store={props.store} />
    </div>
  )
}

export default App