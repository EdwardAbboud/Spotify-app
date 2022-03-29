'use strict';

import { USER_INTERFACE_ID, GET_PLAYLIST_BUTTON_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(GET_PLAYLIST_BUTTON_ID)
    .addEventListener('click', startQuiz);
};

const startQuiz = () => {
  initQuestionPage();
};