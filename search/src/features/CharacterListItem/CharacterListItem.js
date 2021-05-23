import './CharacterListItem.css';

const CharacterListItem = ({
    character
}) => {
    const coverImageStyle = {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
};
return (
    <div>
      <div>
        <h3>
          {character.name}
        </h3>
        </div>
      </div>
  );
};
export default CharacterListItem;