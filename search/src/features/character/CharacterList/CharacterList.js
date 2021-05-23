import './CharacterList.css';
import CharacterListItem from '../CharacterListItem/CharacterListItem';

const CharacterList = ({ characters, isFavorite, toggleFavorite }) => {
  return (
    <div className="character-list-container">
      {characters.map((character) => (
        <CharacterListItem
          key={character.urlFriendlyName}
          character={character}
          className="character-list-item"
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default CharacterList;
