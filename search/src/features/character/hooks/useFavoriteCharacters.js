import { useState, useEffect } from 'react';
import * as storage from '../../../storage/storage';

const FAVORITE_CHARACTERS_KEY = 'marvel:favorite:characters';

const getFavorite = () => {
  const characters = storage.get(FAVORITE_CHARACTERS_KEY);
  if (!characters) {
    return [];
  }
  else
    return characters;
};

const saveFavorite = (characters) => {
  storage.save(FAVORITE_CHARACTERS_KEY, characters);
};

const useFavoriteCharacters = () => {
  const [favCharacters, setFavCharacters] = useState(getFavorite());

  useEffect(() => {
    if (favCharacters) {
      saveFavorite(favCharacters);
    }
  }, [favCharacters]);

  const toggleFavorite = (character) => {
    const favCharacter = favCharacters.find(
      (c) => c.id === character.id
    );

    if (favCharacter) {
      const newCharacters = favCharacters.filter(
        (c) => c.id !== favCharacter.id
      );
      setFavCharacters(newCharacters);
    } else {
      const newCharacters = [...favCharacters, character];
      setFavCharacters(newCharacters);
    }
  };

  const isFavorite = (character) => {
    const favCharacter = favCharacters.find(
      (c) => c.id === character.id
    );
    return !!favCharacter;
  };

  return {
    favCharacters,
    isFavorite,
    toggleFavorite,
  };
};

export default useFavoriteCharacters;