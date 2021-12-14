export const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log('Error To Get Items From LocalStorage');
  }
};

export const getItem = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    return null;
  }
};

export const clearItems = () => {
  window.localStorage.clear();
};

export const loadState = () => {
  try {
    const serializedState = getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return serializedState;
  } catch (error) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    setItem('state', state);
  } catch (error) {
    // Nada por el momento
  }
};
