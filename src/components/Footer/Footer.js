import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Footer = () => {
  return (
    <footer>
      <Box
        px={{ xs: 1, sm: 5 }}
        py={{ xs: 5, sm: 8 }}
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            TODO: social media and info
          </Grid>
          <Box textAlign="center">
            Martin Casas &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer;