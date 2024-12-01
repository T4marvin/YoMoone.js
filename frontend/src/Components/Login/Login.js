import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // For navigation after login

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook to navigate after login

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Basic validation check
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        // Call your login API here (for now, assuming a successful login)
        // You can replace the mock logic below with actual authentication logic
        
        if (email === 'test@example.com' && password === 'password') {
            // If login is successful, redirect to the dashboard
            navigate('/dashboard');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <LoginPageStyled>
            <LoginForm onSubmit={handleSubmit}>
                <h2>Login</h2>
                {error && <Error>{error}</Error>}
                <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit">Login</button>
            </LoginForm>
        </LoginPageStyled>
    );
}

const LoginPageStyled = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(252, 246, 249, 0.9);
    background-image: url('./img/bg.png'); /* Set your background image */
    background-size: cover;
    background-position: center;
`;

const LoginForm = styled.form`
    background: rgba(255, 255, 255, 0.8);
    padding: 3rem;
    border-radius: 12px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    max-width: 400px;
    text-align: center;

    h2 {
        margin-bottom: 1rem;
        font-size: 2rem;
        color: var(--primary-color);
    }

    .input-container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: flex-start;

        label {
            color: var(--primary-color);
            font-size: 1rem;
        }

        input {
            width: 100%;
            padding: 0.8rem;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 1rem;
            outline: none;
            background-color: #f5f5f5;

            &:focus {
                border-color: var(--primary-color);
            }
        }
    }

    button {
        padding: 0.8rem;
        font-size: 1.2rem;
        border: none;
        background-color: var(--color-accent);
        color: white;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: var(--primary-color);
        }
    }
`;

const Error = styled.p`
    color: red;
    font-size: 1rem;
    margin-bottom: 1rem;
`;

export default Login;
