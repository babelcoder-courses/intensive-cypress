import { ChangeEvent, useState } from 'react';

type SearchBoxProps = {
  placeholder: string;
  buttonText: string;
  onSearch: (keyword: string) => void;
};

const SearchBox = ({ placeholder, buttonText, onSearch }: SearchBoxProps) => {
  const [keyword, setKeyword] = useState('');

  const changeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const search = () => onSearch(keyword);

  return (
    <>
      <input
        placeholder={placeholder}
        value={keyword}
        onChange={changeKeyword}
      />
      <button onClick={search}>{buttonText}</button>
    </>
  );
};

export default SearchBox;
