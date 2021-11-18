import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, adaptV4Theme } from '@mui/material/styles';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import './i18n';
import reportWebVitals from './reportWebVitals';


const theme = createTheme(adaptV4Theme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        }},
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
        h6:{
            fontSize: "1.00rem"
        },
    },
}));

ReactDOM.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </StyledEngineProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
