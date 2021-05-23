import './CharacterListItem.css';
import Bookmark from '../../../components/Bookmark/Bookmark';

const CharacterListItem = ({ character, className, toggleFavorite, isFavorite }) => {
 
  return (
    <div
      className={`character-list-item-container ${className}`}>
      <div className="character-list-item-info">
        <h3 className="character-list-item-title">
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
