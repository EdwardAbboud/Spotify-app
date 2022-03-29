'use strict';

import { GET_PLAYLIST_BUTTON_ID } from '../constants.js';


// Create the welcome screen

export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <img class="welcome-img" src="public/assets/playlist-ify.png">
    <h2>Welcome</h2>
    <button id="${GET_PLAYLIST_BUTTON_ID}">Generate PLaylist</button>
  `;
  return element;
};