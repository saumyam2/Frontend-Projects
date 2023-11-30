{/* <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input error
            id="standard-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            aria-describedby="my-helper-text" 
            sx={{maxWidth:'50%', mx:5}} />

            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input error
            id="standard-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            aria-describedby="my-helper-text" 
            sx={{maxWidth:'50%', mx:5}} />
             */}


      {/* {
          currForm === 'login' ? <LoginPage onFormSwitch={toggleForm}/> : <SignupPage onFormSwitch={toggleForm}/>
      } */}

                {/* <Box sx={{border:3}}>1</Box>
                <Box sx={{border:3,alignSelf:'self-end'}}>2</Box> */}

                {/* <InputLabel sx={{mt:5, ml:7}} htmlFor="standard-adornment-password">Email Address</InputLabel>
                <Box sx={{display:'flex',alignItems:'flex-end',mx:5,my:1}}>
                    <AccountCircle sx={{ color:'action.active', mr: 1, my:1 }} />
                    <TextField required id="standard-required" variant="standard" />
                </Box> */}


//   import React from 'react';
// import { BrowserRouter,Router,Route } from 'react-router-dom';
// import { Switch } from '@mui/material';
// import LoginPage from './Components/LoginPage';
// import SignupPage from './Components/SignupPage';

// const AppRouter = () => {
//   return (
//     <BrowserRouter>
//     <Router>
//       <Switch>
//         <Route path="/" exact component={<LoginPage />}></Route>
//         <Route path="/signup" exact component={<SignupPage />}></Route>
//       </Switch>
//     </Router>
//     </BrowserRouter>
//   )
// }

// export default AppRouter

// // import React from 'react';
// // import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// // import LoginPage from './Components/LoginPage';
// // import SignupPage from './Components/SignupPage';

// // const AppRouter = () => {
// //   return (
// //     <Router basename='./Components/LoginPage'>
// //       <Routes>
// //         <Route path="/LoginPage" component={<LoginPage />} />
// //         <Route path="/SignupPage" component={<SignupPage />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default AppRouter

{/* <TextField required id="standard-required" label="Name" variant="standard" sx={{mx:5}} values={values.name} onChange={handleChange} onBlur={handleBlur}/>
                        <Input name='email' sx={{mx:5}} id="input-with-icon-adornment"/> */}

                            // <Formik
    //    initialValues={{ email: '', password: '' }}
    //    validate={values => {
    //      const errors = {};
    //      if (!values.email) {
    //        errors.email = 'Required';
    //      } else if (
    //        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //      ) {
    //        errors.email = 'Invalid email address';
    //      }
    //      return errors;
    //    }}
    //    onSubmit={(values, { setSubmitting }) => {
    //      setTimeout(() => {
    //        alert(JSON.stringify(values, null, 2));
    //        setSubmitting(false);
    //      }, 400);
    //    }}
    // ></Formik>

    

    // const [uname, setUname] = useState('');
    // const [pass, setpass] = useState('');
    // const [email, setEmail] = useState('');
    // const [age, setAge] = useState(0);
    // const [phone, setPhone] = useState(0);
    
    
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   alert("Form submitted");
    // }
import { BrowserRouter,Routes,Route } from 'react-router-dom';

<BrowserRouter>
<div className='mainClass'>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Routes>
      <Route path="/" exact component={<LoginPage />}>Login Page</Route>
      <Route path="/signup" exact component={<SignupPage />}> Sign Up Page</Route>
    </Routes>
     {/* {currForm === 'login' ? <LoginPage onFormSwitch={toggleForm}/> : <SignupPage onFormSwitch={toggleForm}/>} */}
  </ThemeProvider>
</div>
</BrowserRouter>

{/* <Box sx={{textAlign:'end', mr:5,mt:5}}>
                Want to make a New Account? 
                <Link to="/signup">Sign Up</Link>
            </Box> */}
            {/* <Link href="/SignupPage" underline="hover" sx={{textAlign:'end', mr:2}}> 
                {'Sign Up if you haven\'t already'}
            </Link>
            </Box> */}


                    {/* <Box sx={{textAlign:'end', mr:5,mt:5}}>
                        If you already have an account- 
                        <Link to="/signup">Login</Link>
                    </Box> */}
