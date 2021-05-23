import axios from 'axios';

const characterApi = {
  searchCharacters: (searchTerm) => {
    const options = {
        ts: '1',
        apiKey: '49e91c859fc5b22318a1be0560f917b0',
        hash: 'af55b4065aabc103224573f4e4c603ef'
    };
    const data = axios.get(
      `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchTerm}&orderBy=name&limit=20&offset=10&ts=${options.ts}&apikey=${options.apiKey}&hash=${options.hash}`
    );
    return data;
  },
};

export default characterApi;