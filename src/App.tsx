/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Header from './Components/Header';
import MapWrapper from './Components/MapWrapper';
import { Container } from '@material-ui/core';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@emotion/react';


const theme = {
    palette: {
        primary: {
            main: "#263238",
            light: "#4f5b62",
            dark: "#000a12",
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#b0bec5",
            light: "#e2f1f8",
            dark: "#808e95",
            contrastText: "#000000"

        }
    },
    spacing: 4
}
const muitheme = createTheme(theme);

function App() {
    return (
        <ThemeProvider theme={muitheme} >
            <Container
                css={{
                    backgroundColor: theme.palette.primary.light,
                    width: "100vw",
                    height: "100vh",
                }}
            >
                <Header />
                <MapWrapper />
            </Container>
        </ThemeProvider>
    )
}

export default App;
