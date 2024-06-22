import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import {CharContext} from "../utils/useContext.js";
import {characters} from "../utils/characters.js";
import {defaultHero, navItems} from "../utils/constants.js";

export const withHeroId = (route) => (WrappedComponent) => (props) => {
    const {heroId} = useParams();
    const {setHero} = useContext(CharContext);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(heroId);
        if (!Object.keys(characters).includes(heroId)) {
            navigate(`/${route}/${defaultHero}`);
        } else {
            setHero(heroId);
        }
    }, [heroId]);

    return (
        Object.keys(characters).includes(heroId) ?
            <WrappedComponent {...props}></WrappedComponent> :
            <></>
    );
};