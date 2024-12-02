import React,{useState} from 'react'
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Example login validation
      if (username === '' || password === '') {
        setErrorMessage('Username and password are required!');
      } else {
        setErrorMessage('');
        alert('Login successful');
        // Implement your login logic here (e.g., API call)
      }
    };
  
    return (
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    );
}

export default Login