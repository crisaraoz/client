import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';

// Datos de ejemplo del usuario
const userData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    avatarUrl: 'https://via.placeholder.com/150', // URL de una imagen de perfil de ejemplo
};

export default function UserProfile() {
    return (
        <Box>
            <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar src={userData.avatarUrl} sx={{ width: 56, height: 56 }} />
                    <Typography variant="h6">{userData.name}</Typography>
                </Box>
                <Typography variant="subtitle1" sx={{ mt: 1 }}>{userData.email}</Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>{userData.bio}</Typography>
            </Paper>
        </Box>
    );
}
