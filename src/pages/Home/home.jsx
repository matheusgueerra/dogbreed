import React, { useContext, useState, useEffect } from 'react'

import { AuthContext } from '../../contexts/auth'
import { api } from '../../services/api';

const HomePage = () => {
  const { logout } = useContext(AuthContext);
  
  const handleLogout = () => {
    logout();
      
  };

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch(api + "list").then(response => response.json())
    .then(data => {
      setRepositories(data)
    });
  },[]);

  return (

    <>
      <div>Home Page</div>
      <p></p>
      <button onClick={handleLogout}>Sair</button>
      <ul>
        {repositories.map(repo => {
          return(
          <li>{repositories.name}</li>
          )
        })}
      </ul>
    </>

  )
}

export default HomePage