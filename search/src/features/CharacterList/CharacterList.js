import CharacterListItem from '../CharacterListItem/CharacterListItem';
import './CharacterList.css';


const CharacterList = ({characters}) => {
    return (
      <div >
        {characters.map((character) => (
          <CharacterListItem
          character={character}
          />
        )
      )}
      </div>
    );
  };
  export default CharacterList;