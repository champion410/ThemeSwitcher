import { createContext, useContext } from "react";


// Here we create a context calle ThemeContext, inside we add some data, but they are actually some general information
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// Here we are exporting a variable who has ThemeContext.Provider inside
export const ThemeProvider = ThemeContext.Provider;

//Here we create a hook called useTheme so that we can use it in all of that. So we create a function called useTheme, and inside we useContext() with ThemContext inside. So now we can just use the useTheme hook without having to pass the Context
export default function useTheme(){
  return useContext(ThemeContext);
}