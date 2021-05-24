import { useState, useEffect } from 'react';
import './SuperheroSearchPage.css';
import Search from '../../components/Search/Search';
import CharacterList from '../../features/character/CharacterList/CharacterList';
import useFavoriteCharacters from '../../features/character/hooks/useFavoriteCharacters';
import characterApi from '../../api/Character';

const SuperheroSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [characters, setCharacters] = useState([]);
  const {
    favCharacters,
    isFavorite,
    toggleFavorite,
  } = useFavoriteCharacters();

  const onSearch = (newSearchTerm) => setSearchTerm(newSearchTerm);

  useEffect(() => {
    if (searchTerm) {
      characterApi.searchCharacters(searchTerm).then(({ data }) => {
        setCharacters(data.data.results);
      });
    } else {
      setCharacters([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (!searchTerm) {
      setCharacters(favCharacters);
    }
  }, [favCharacters, searchTerm]);

  return (
    <div className="character-search-page-container">
      <Search onChange={onSearch} />
      <CharacterList
        characters={characters}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default SuperheroSearchPage;
