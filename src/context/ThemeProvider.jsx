import { ThemeContext } from "./ThemeContext"; //2) creating a provider
import { useState } from "react";
export const ThemeProvider = ({ children }) => {
  //de structuring

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light'); // ternary operator (as if else)
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};