"use client";

const { createContext, useState, useEffect } = require("react");

export const themeContext = createContext();

const getlocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getlocalStorage();
  });

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <themeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </themeContext.Provider>
  );
};
