import { useState, useCallback, useContext } from 'react';

import { useLocalStorage } from './useLocalStorage';

import { ThemeContext } from '../context/ThemeContext';
import { theme } from '../utils';

export const useTheme = () => {
  const { getLocalStorageValue, setLocalStorageValue } = useLocalStorage();

  const [systemTheme, setSystemTheme] = useState(() => {
    const localTheme = getLocalStorageValue('theme');
    return localTheme ? localTheme : theme.blueDolphin;
  });

  const setTheme = useCallback(
    (value) => {
      setSystemTheme(value);
      setLocalStorageValue('theme', value);
    },
    [setSystemTheme, setLocalStorageValue]
  );

  return { systemTheme, setTheme };
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
