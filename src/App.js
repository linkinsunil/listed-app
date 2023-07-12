import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState('');

  function handleUser(e) {
    setUser(e);
  }

  return (
    <div className='App'>
      {user ? <Dashboard /> : <Login onLogin={handleUser} />}
    </div>
  );
}

export default App;
