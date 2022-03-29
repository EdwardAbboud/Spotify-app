'use strict';

import { createNavbar } from './components/navbar.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
    createNavbar();
    initWelcomePage();

};

window.addEventListener('load', loadApp);