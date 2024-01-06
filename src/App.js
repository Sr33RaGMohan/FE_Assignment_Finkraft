import React, { useState } from 'react';
import Dashboard from './components/dashBoard';
import Login from './components/login';
import spaceMissionData from './space-mission-data.json';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Dashboard spaceMissionData={spaceMissionData} />
      )}
    </div>
  );
};

export default App;
