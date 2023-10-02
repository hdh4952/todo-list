import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import ToDoList from './components/ToDoList';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App h-screen w-screen flex justify-center items-center">
        <ToDoList />
      </div>
    </ThemeProvider>
  );
}

export default App;
