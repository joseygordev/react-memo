import React, {useEffect, useState} from 'react'

import TodoListItem from './TodoListItemWithMemo';

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      response.json().then(data => {
        setTodoList(data);
      })
    })
  }, []);

  return (
    <div>
      <input onChange={e => setNewItem(e.target.value)} value={newItem} />
      <ul>
        {todoList.map(item => <TodoListItem key={item.id} item={item} />)}
      </ul>
    </div>
  )
}
