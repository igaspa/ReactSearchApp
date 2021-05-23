import { useState, useEffect } from 'react';
import * as storage from '../../../services/storage';

const FAVORITE_CHARACTERS_KEY = 'marvel:favorite:characters';

const getFavorite = () => {
  const characters = storage.get(FAVORITE_CHARACTERS_KEY);
  if (!characters) {
    return [];
  }
  return characters;
};

const saveFavorite = (characters) => {
  storage.save(FAVORITE_CHARACTERS_KEY, characters);
};

const useFavoriteCharacters = () => {
  const [favoriteCharacters,  setFavoriteCharacters] = useState(getFavorite());

  useEffect(() => {
    if (favoriteCharacters) {
      saveFavorite(favoriteCharacters);
    }
  }, [favoriteCharacters]);

  const toggleFavorite = (character) => {
    const favoriteCharacter = favoriteCharacters.find(
      (r) => r.urlFriendlyName === character.urlFriendlyName
    );

    if (favoriteCharacter) {
      const newCharacters = favoriteCharacter.filter(
        (r) => r.urlFriendlyName !== favoriteCharacter.urlFriendlyName
      );
      setFavoriteCharacters(newCharacters);
    } else {
      const newCharacters = [...favoriteCharacters, character];
      setFavoriteCharacters(newCharacters);
    }
  };

  const isFavorite = (character) => {
    const favoriteCharacter = favoriteCharacters.find(
      (r) => r.urlFriendlyName === character.urlFriendlyName
    );
    return !!favoriteCharacter;
  };

  return {
    favoriteCharacters,
    isFavorite,
    toggleFavorite,
  };
};

export default useFavoriteCharacters;