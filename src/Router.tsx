import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import './App.css';
import '@fontsource/work-sans/300.css';
import '@fontsource/work-sans/400.css';
import '@fontsource/work-sans/500.css';
import '@fontsource/work-sans/700.css';

function Router() {
    const theme = createTheme({
        typography: {
            fontFamily: 'Work Sans',
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: `
                    @font-face {
                      font-family: 'Work Sans';
                    }
                `,
            },
        }
    })

    return (
        <div>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default Router;
