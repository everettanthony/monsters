import { useEffect, useState } from 'react';
import SearchInput from '../components/Search/SearchInput';
import CardList from '../components/Card/CardList';
import './styles.css';

function App() {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);  

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const searchHandler = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="monsters">
      <div className="monsters-container">
        <header className="hdr">
          <h1>Monsters Rolodex</h1>
          <SearchInput placeholder="Search Monsters" handleChange={searchHandler} />
        </header>
        <main className="main">
          <CardList monsters={filteredMonsters} />
        </main>
      </div>
    </div>
  );
}

export default App;
