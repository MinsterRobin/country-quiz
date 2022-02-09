import React from "react";
import {THEMES} from "./styles/themes";
import GlobalStyles from "./styles/GlobalStyles";
import {ThemeProvider} from "styled-components";
import CountryQuizView from "./views/CountryQuizView";

function App() {
    return (
        <ThemeProvider theme={THEMES[0]} classname="App">
            <GlobalStyles theme={THEMES[0]}/>
            <CountryQuizView/>
        </ThemeProvider>
    );
}

export default App;
