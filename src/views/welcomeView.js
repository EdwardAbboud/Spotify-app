'use strict';

import { GET_PLAYLIST_BUTTON_ID } from '../constants.js';


// Create the welcome screen

export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <div class="welcome-img-container">
    <img class="welcome-img" src="public/assets/playlist-ify.png">
    </div>
    <button id="${GET_PLAYLIST_BUTTON_ID}">Blast off!</button>
    <div class="banner-container">
    <img class="welcome-banner" src="public/assets/banner-welcome.png">
    </div>
    
  `;
  return element;
};