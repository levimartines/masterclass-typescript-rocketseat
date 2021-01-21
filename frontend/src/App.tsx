import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import api from "./services/api";
import User from "./components/User";

interface IUser {
  name: string;
  email: string;
}

function App() {

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    api.get<IUser[]>('/users').then(res => setUsers(res.data))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>

        {users.map(user => <User key={user.email} user={user}/>)}
      </header>
    </div>
  );
}

export default App;
