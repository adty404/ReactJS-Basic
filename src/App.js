import React from "react";
import PropTypes from "prop-types";
import Router from "./router";
import { useRecoilState } from "recoil";
import { theme } from "./store/index";

function App(props) {
    const [currentTheme, setCurrentTheme] = useRecoilState(theme)
    const defaultTheme = currentTheme == 'dark' ?'bg-dark text-white' : 'bg-success text-white'

    return (
    <div className={`${defaultTheme} vh-100`}>
        <Router />
    </div>
    );
}

App.propTypes = {};

export default App;
