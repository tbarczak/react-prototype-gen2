import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { MantineProvider, createTheme } from '@mantine/core';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as ThemeMode) || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const theme = createTheme({
    colors: {
      primary: [
        '#edf8ef', // Lightest shade
        '#d4edd8',
        '#bbdec2',
        '#9fcea9',
        '#84bf91',
        '#64ae76',
        '#47965a',
        '#317039', // Main brand color
        '#1c4720',
        '#0a2710'  // Darkest shade
      ],
      secondary: [
        '#fef9e6', // Lightest shade
        '#fef6d9',
        '#fcf0bf',
        '#faeb9f',
        '#f8e380',
        '#f5d95c',
        '#f3cf38',
        '#f1be49', // Main secondary color
        '#dea518',
        '#a67a13'  // Darkest shade
      ],
      error: [
        '#fde9e4', // Lightest shade
        '#fbd3c9',
        '#f8beaf',
        '#f5a894',
        '#f29379',
        '#ef7f5f',
        '#eb6a44',
        '#cc4b24', // Main error color
        '#a03a1c',
        '#732915'  // Darkest shade
      ]
    }
  });

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <MantineProvider 
        theme={theme} 
        forceColorScheme={themeMode}
      >
        {children}
      </MantineProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};