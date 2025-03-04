import React, { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://localhost:7101/api/User', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Login successful!');
                // Handle successful login (e.g., redirect to another page, store token, etc.)
            } else {
                setMessage(data.message || 'Invalid email or password');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="form-container"> 
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="registration-form">
                <div className="form-group">
                    <label>UserName:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='input'
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className='input'
                    />
                </div>
                <br></br>
                <button className='submit-button ' type="submit">Login</button>
            </form>
            {message && <p className='error-message'>{message}</p>}
        </div>
    );
};

export default LoginPage;
