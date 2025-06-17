import { Card, Typography } from "@mui/material";

export default function Profile() {
    return (
        <Card sx={{
            display: 'flex',
            borderRadius: 4,
            width: '24rem',
            height: '28rem',
            flexDirection: 'column',
        }}>
            <img className="w-full object-cover" src="https://images5.alphacoders.com/413/413842.jpg" alt="Profile Image" />
            <Typography variant="h6" sx={{
                mt: '0.5rem',
            }}>
                Uzumaki Naruto
            </Typography>
        </Card>
    )
}

