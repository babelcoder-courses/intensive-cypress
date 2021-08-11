import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';

import { Todo } from './Todo';

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

type TodoListProps = {
  keyword: string;
};

const TodoList = ({ keyword }: TodoListProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = useCallback(async () => {
    const { data: todos } = await axios.get<Todo[]>(
      keyword ? `${TODOS_URL}?q=${keyword}` : TODOS_URL
    );

    setTodos(todos);
  }, [keyword]);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
