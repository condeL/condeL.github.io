import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

import reportWebVitals from './reportWebVitals';


const theme = createTheme({
    palette: {
        primary: {
            main :"#2962FF"
        },
        secondary: {
            main: "#ffc629"
        },
        background: {
            default: "#e0e0e0"
        },
    },
    typography: {
        h1: {
            fontSize: "3.75rem"
        },
        h2: {
            fontSize: "2.125rem"
        },
        h3: {
            fontSize: "1.5rem"
        },
        h4: {
            fontSize: "1.15rem"
        },
        h5:{
            fontSize: "1.05rem"
        },
    },
});

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
