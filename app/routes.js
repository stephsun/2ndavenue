import React from 'react';
import { Router, Route } from 'react-router';

import Main from './views/main';

export default (
    <Router>
        <Route path='/' component={ Main } />
    </Router>
);