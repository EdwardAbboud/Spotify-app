import { HOME_BUTTON_ID, NAVBAR_CONTAINER_ID } from "../constants.js";

// navbar DOM creator
export const createNavbar = () => {
    const navContainer = document.getElementById(NAVBAR_CONTAINER_ID);
    const nav = document.createElement('div');
    nav.classList.add('navbar');
    nav.innerHTML = String.raw`
    <img class="logo" src="public/assets/spotify-logo.png">
    <h1>Playlist-ify</h1>
    <button id= ${HOME_BUTTON_ID}>Home</button>
    `
    navContainer.appendChild(nav);
}