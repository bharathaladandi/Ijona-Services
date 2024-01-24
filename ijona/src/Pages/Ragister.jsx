import React, { useState } from 'react'

export const Ragister = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Username :
                        <input type="text" value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                    </h3>
                </div>
                <br />

                <div>
                    <h3>Password :
                        <input type="password" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </h3>
                </div>
                <br />
                <button type='submit'> Login </button>
            </form>
        </div>
    )
}
