import { HOME_BUTTON_ID, NAVBAR_CONTAINER_ID, SIGN_IN_BUTTON } from "../constants.js";

// navbar DOM creator
export const createNavbar = () => {
    const navContainer = document.getElementById(NAVBAR_CONTAINER_ID);
    const nav = document.createElement('div');
    nav.classList.add('navbar');
    nav.innerHTML = String.raw`
    <button id=${HOME_BUTTON_ID}>Home</button>
    <h1>Playlist-ify</h1>
    <button id=${SIGN_IN_BUTTON}><img class="logo" src="public/assets/spotify-logo.png">Sign in</button>
    `
    navContainer.appendChild(nav);
}