import { useEffect } from 'react';
import { useRef, useState, UseEffect } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const user = {
    email,
    password, 
    confirmPassword
  };


  return (
    <div id="register">
      <h1 className="register">Registre-se</h1>
      <form className="form" onSubmit={handleSubmit}>
            <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder='Digite aqui o seu email'
            value={email} 
            onChange={(e) =>setEmail(e.target.value)} 
            />
          <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder='Insira sua senha' 
            value={password}
            onChange={(e) =>setPassword(e.target.value)}
            />
            <input
            type="password" 
            name="password" 
            id="password" 
            placeholder="Confirme sua senha "
            value={confirmPassword}
            onChange={(e) =>setConfirmPassword(e.target.value)}
            />
      </form>
        <div className="actions">
          <button type="submit">Entrar</button>
        </div>
        <p>
          Já tem conta? <Link to="login">Clique aqui.</Link>
        </p>
    </div>
  )
}

export default Register