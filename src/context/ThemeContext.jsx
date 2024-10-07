import { createContext } from 'react';
import { useTheme } from '../hooks/useTheme';

export const ThemeContext = createContext({});

export default function ThemeProvider({ children }) {
  const { systemTheme, setTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ systemTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
