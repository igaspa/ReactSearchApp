import './CharacterListItem.css';
import Bookmark from '../../../components/Bookmark/Bookmark';

const CharacterListItem = ({ character, className, toggleFavorite, isFavorite }) => {
  const url = `${character.thumbnail.path}.jpg`;
  return (
    <div
      className={`character-list-item-container ${className}`}>
      <div className="character-list-item-info">
        <h3>
          <img className="character-picture" src={url} alt="character picture"/>
          {character.name}
        </h3>
        <Bookmark
            onClick={() => toggleFavorite(character)}
            isActive={isFavorite(character)}
          />
      </div>
    </div>
  );
};

export default CharacterListItem;
