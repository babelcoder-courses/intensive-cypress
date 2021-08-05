import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import SearchBox from './SearchBox';

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

type Todo = {
  id: number;
  title: string;
};

const TodoList: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async (keyword?: string) => {
    const { data: todos } = await axios.get<Todo[]>(
      keyword ? `${TODOS_URL}?q=${keyword}` : TODOS_URL
    );

    setTodos(todos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <SearchBox
        placeholder="Enter a keyword..."
        buttonText="Search"
        onSearch={fetchTodos}
      ></SearchBox>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
