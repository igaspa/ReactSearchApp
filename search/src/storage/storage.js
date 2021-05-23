const save = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  
  const get = (key) => {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
  
    return null;
  };
  
  export { save, get };