import React, { useState } from 'react';
import supabase from "../../services/supabaseClient";
import Container from "../../components/layout/Container/Container";
import {Button, TextField, Typography} from "@mui/material";

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        const { error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            setError(error.message);
        } else {
            setSuccess('Registration successful! Please check your email to confirm your account.');
        }
    };

    return (
        <Container>
            <Typography variant="h1">Register</Typography>
            <form onSubmit={handleRegister}>
                <div>
                    <TextField
                        type="email"
                        variant="standard"
                        label="email"
                        value={email}
                        sx={{ mb: 2 }}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <TextField
                        type="password"
                        variant="standard"
                        label="password"
                        value={password}
                        sx={{ mb: 2 }}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <Button variant="contained" type="submit">Register</Button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </Container>
    );
};

export default Register;
