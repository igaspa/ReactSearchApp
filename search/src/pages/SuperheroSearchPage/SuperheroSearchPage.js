import './SuperheroSearchPage';
import {useState,useEffect } from 'react';
import Search from '../../components/Search/Search';
import characterApi from '../../api/Character';
import CharacterList from '../../features/CharacterList/CharacterList';

const SuperheroSearchPage = ()=>{
    const [searchTerm, setSearchTerm] = useState('');
    const [characters, setCharacters] = useState([]);

    const onSearch = (newSearchTerm) => setSearchTerm(newSearchTerm);
  
    useEffect(() => {
      if (searchTerm) {
        characterApi.searchCharacter(searchTerm).then((data) => {
          setCharacters(data.data.results);
        });
      } else {
        setCharacters();
      }
    }, [searchTerm]);
  
    return (
        <div className="character-search-page-container">
          <Search onChange={onSearch} />
          <CharacterList
          characters={characters}/>
        </div>
    );
  };

export default SuperheroSearchPage;