import React,{useState} from 'react';
// import AppRouter from './AppRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignupPage from './Components/SignupPage';
import LoginPage from './Components/LoginPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#c8e1cc"
      }
    }
  });
  const[currForm, setCurrForm] = useState('login');
  const toggleForm = (fname) => {
    setCurrForm(fname);

  }
  return (
    <BrowserRouter>
    <div className='mainClass'>
\      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" exact component={<LoginPage />}>Login Page</Route>
          <Route path="/signup" exact component={<SignupPage />}> Sign Up Page</Route>
        </Routes>
         {/* {currForm === 'login' ? <LoginPage onFormSwitch={toggleForm}/> : <SignupPage onFormSwitch={toggleForm}/>} */}
      </ThemeProvider>
    </div>
    </BrowserRouter>
  );
}

export default App;
