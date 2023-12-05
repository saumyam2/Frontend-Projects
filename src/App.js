import React,{useState} from 'react';
// import AppRouter from './AppRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {AuthProvider} from './Context/AuthProvider';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import AuthContext from './Context/AuthProvider';
import HomePage from './Components/HomePage';

const theme = createTheme({
  palette: {
    background: {
      default: "#c8e1cc"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 1000,
      md: 1200,
      lg: 1300,
      xl: 1536,
    },
  },
});

function App() {
  
  const [currForm, setCurrForm] = useState('login');
  return (
    <div>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <AuthProvider>
    <Router>
    <Routes>    
      <Route path="/SignupPage" element={<SignupPage />} />
      <Route path='/LoginPage' element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
    </Router>
      {/* <div className='mainClass'>
        {currForm === 'login' ? (
              <LoginPage setCurrForm={() => setCurrForm('signup')} />
            ) : (
              <SignupPage setCurrForm={() => setCurrForm('login')} />
            )}
      </div> */}
    </AuthProvider>
    </ThemeProvider>
    </div>
  );
}

export default App;