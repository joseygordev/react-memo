import React, {memo} from 'react'

const TodoListItem = ({item}) => {
  return (
    <p>
      <strong>{item.title}:</strong>
      {item.completed ? ' completed' : ' not completed'}
    </p>
  )
}

export default memo(TodoListItem);
