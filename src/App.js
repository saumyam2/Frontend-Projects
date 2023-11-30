import React,{useState} from 'react';
// import AppRouter from './AppRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';

const theme = createTheme({
  palette: {
    background: {
      default: "#c8e1cc"
    }
  }
});

function App() {
  
  const [currForm, setCurrForm] = useState('login');
  // const toggleForm = (fname) => {
  //   setCurrForm(fname);
  // }
  return (
    <div>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>  
    <AuthProvider>
      <div className='mainClass'>
        {/* {currForm === 'login' ? <LoginPage onFormSwitch={toggleForm('signup')} /> : <SignupPage onFormSwitch={toggleForm('login')} />} */}
        {currForm === 'login' ? (
              <LoginPage setCurrForm={() => setCurrForm('signup')} />
            ) : (
              <SignupPage setCurrForm={() => setCurrForm('login')} />
            )}
      </div>
    </AuthProvider>
    </BrowserRouter>
    </ThemeProvider>
    </div>
  );
}

export default App;