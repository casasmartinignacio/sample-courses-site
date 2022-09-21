import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Theme from 'theme';
import AppRouter from 'routes';

const App = () => {
  return (
    <Theme>
      <Router>
        <AppRouter />
      </Router>
    </Theme>
  );
}

export default App;