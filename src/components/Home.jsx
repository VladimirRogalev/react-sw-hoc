import React, {useContext, useEffect} from 'react';
import Hero from "./Hero.jsx";
import DreamTeam from "./DreamTeam.jsx";
import Story from "./Story.jsx";
import {withHeroId} from "../hoc/withHeroId.jsx";
import {navItems} from "../utils/constants.js";


const Home = () => {


    return (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <Story/>
        </main>
    );
};

export default withHeroId(navItems[0].route)(Home);