import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import App from './components/App';
import store from './App/store';
import { tmdbApi } from './services/TMDB';

const theme = createTheme({});

ReactDOM.render(
  <Provider store={store}>
    <ApiProvider api={tmdbApi}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      </ThemeProvider>
    </ApiProvider>
  </Provider>,
  document.getElementById('root'),
);
