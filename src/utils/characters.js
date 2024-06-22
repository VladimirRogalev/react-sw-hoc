import friend1 from "../images/friend1.jpg";
import friend2 from "../images/friend2.jpg";
import friend3 from "../images/friend3.jpg";
import friend4 from "../images/friend4.jpg";
import friend5 from "../images/friend5.jpg";
import friend6 from "../images/friend6.jpg";
import friend7 from "../images/friend7.jpg";
import friend8 from "../images/friend8.jpg";
import friend9 from "../images/friend9.jpg";
import friend10 from "../images/main.jpg";



// export const friends = [friend9, friend8, friend7, friend6, friend5, friend4, friend3, friend2
//     , friend1];
export const base_url = 'https://sw-info-api.herokuapp.com';
export const version = '/v1';

export const characters = {
    luke: {
        name: "Luke Skywalker",
        img: friend10,
        url: `${base_url + version}/peoples/1`
    },
    yoda: {
        name: "Yoda",
        img: friend9,
        url: `${base_url + version}/peoples/0`
    },
    obi_wan: {
        name: "Obi-Wan Kenobi",
        img: friend8,
        url: `${base_url + version}/peoples/10`
    },
    falcon: {
        name: "Falcon",
        img: friend7,
        url: `${base_url + version}/transports/10`
    },
    leia: {
        name: "Leia",
        img: friend6,
        url: `${base_url + version}/peoples/5`
    },
    han_solo: {
        name: "Han Solo",
        img:friend5,
        url: `${base_url + version}/peoples/14`
    },
    chewbacca: {
        name: "Chewbacca",
        img: friend4,
        url: `${base_url + version}/peoples/13`
    },
    ewok: {
        name:"Wecket Systri Warrick",
        img: friend3,
        url: `${base_url + version}/peoples/30`
    },
    c3po: {
        name:"C-3PO",
        img: friend2,
        url: `${base_url + version}/peoples/2`
    },
    r2d2: {
        name: "R2D2",
        img: friend1,
        url: `${base_url + version}/peoples/3`
    }
}