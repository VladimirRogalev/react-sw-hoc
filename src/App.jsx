import React, {Component, useEffect, useState} from 'react';
import "./App.css";
import Header from "./components/Header.jsx";
import Switcher from "./components/Switcher.jsx";
import Footer from "./components/Footer.jsx";
import {defaultHero, navItems} from "./utils/constants.js";
import {CharContext} from "./utils/useContext.js";
import {characters} from "./utils/characters.js";
import {useNavigate, useParams} from "react-router-dom";

const App = () => {


    const [hero, setHero] = useState(defaultHero);



    return (

        <div>
            <CharContext.Provider value={
                {hero, setHero}
            }>
                <Header/>
                <Switcher/>
            </CharContext.Provider>
            <Footer/>
        </div>
    );

};

export default App;