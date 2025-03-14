import { useState } from 'react'
import useGetUsers from "../hooks/useGetProducts";

const HomePage = () => {
  const [search, setSearch] = useState([]);
  const users = useGetUsers(search);
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <h1>Users</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
      />
      <ul className='users__grid'>
        {users.map((users, index) => (
          <li key={users.id} className='users__item'>
            <h2>Номер: {index + 1}</h2>
            <img className='users__img' src= {users.avatar} alt="avatar" />
            <h2 className='users__name'>Имя: {users.name}</h2>
            <p className='users__email'>Почта: {users.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;