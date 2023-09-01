import { useEffect, useState } from "react";

export function useLocalStorageState(initialState, identifier = "") {
  const [key, setKey] = useState(function () {
    const storedValue = localStorage.getItem(identifier);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(identifier, JSON.stringify(key));
    },
    [key, identifier]
  );

  return [key, setKey];
}
