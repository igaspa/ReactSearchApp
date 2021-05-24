import './CharacterListItem.css';
import Bookmark from '../../../components/Bookmark/Bookmark';

const CharacterListItem = ({ character, className, toggleFavorite, isFavorite }) => {
  const url = `${character.thumbnail.path}.jpg`;
  return (
    <div
      className={`character-item-container ${className}`}>
      <div className="character-item">
          <img className="character-image" src={url} alt="character"/>
           <h3 className="character-name">  {character.name}</h3>
        <div>
        <Bookmark
            onClick={() => toggleFavorite(character)}
            isActive={isFavorite(character)}
          />
          </div>
      </div>
    </div>
  );
};

export default CharacterListItem;
