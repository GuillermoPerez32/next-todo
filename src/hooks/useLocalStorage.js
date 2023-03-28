import { useEffect, useState } from "react";

const useLocalStorage = (key, initialState) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const rawElement = localStorage.getItem(key);
    const element = JSON.parse(rawElement);
    setState(element ? element : []);
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorage;
