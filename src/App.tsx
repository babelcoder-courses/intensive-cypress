import { useState } from 'react';

import SearchBox from './SearchBox';
import TodoList from './TodoList';

function App() {
  const [keyword, setKeyword] = useState<string>('');

  return (
    <>
      <SearchBox
        placeholder="Enter a keyword..."
        buttonText="Search"
        onSearch={(keyword) => setKeyword(keyword)}
      ></SearchBox>
      <TodoList keyword={keyword} />
    </>
  );
}

export default App;
