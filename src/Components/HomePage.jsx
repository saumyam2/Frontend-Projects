import React from 'react'
import { Container,Box,Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <Container fixed sx={{mt:1, width:'40%',mt:'10%'}}>
        <Box sx={{display:'grid',border:2,boxShadow:7,backgroundColor:'white',borderRadius:2, height:'50%',alignSelf:'center'}}>
            <br />
            <img style={{height:'100%'}} src="https://www.rawpixel.com/image/2652102/free-illustration-image-watercolor-background-paper#eyJrZXlzIjoiIiwic29ydGVkS2V5cyI6IiRiYWNrZ3JvdW5kIn0=" alt="" />
            <Box sx={{ml:'30%'}}>
            <Typography >Do you want to <Link to="/SignupPage" style={{ textDecoration: 'none' }}> Sign Up </Link>
            </Typography>
            </Box>
            <br />
            <br />
            <Box sx={{ml:'30%',mb:3}}>
            <Typography >Do you want to <Link to="/LoginPage" style={{ textDecoration: 'none' }}> Login </Link>
            <br />
            </Typography>
            </Box>
            
            
        </Box>
    </Container>
  )
}

export default HomePage