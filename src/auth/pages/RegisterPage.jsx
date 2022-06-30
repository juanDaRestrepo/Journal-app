import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, TextField, Typography, Link  } from "@mui/material";

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';


const formValidations = {
  email: [(value) => value.includes('@'), 'Email must contain an at sign'],
  password: [(value) => value.length >= 6, 'Password must contain six or more characters'],
  displayName: [(value) => value.length >= 1,'Name is required']
}

export const RegisterPage = () => {  
  
  const [formSubmitted, setFormSubmitted] = useState(false)

  const formData = {
    email: '',
    password: '',
    displayName: ''
  }


  const { formState, displayName, email, password, onInputChange,
          isFormValid, displayNameValid, emailValid, passwordValid} = useForm(formData, formValidations);

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true)
  }

 
  
  return (
      <AuthLayout title="Register">
        <form onSubmit={onSubmit}>
          <Grid container>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Fullname"
                type="text"
                placeholder="Enter your fullname"
                fullWidth
                name="displayName"
                value={displayName}
                onChange={ onInputChange }
                error={!!displayNameValid && formSubmitted}
                helperText={displayNameValid}
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Email"
                type="email"
                placeholder="email@google.com"
                fullWidth
                name="email"
                value={email}
                onChange={ onInputChange }
                error={!!emailValid && formSubmitted}
                helperText={emailValid}
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Password"
                type="password"
                placeholder="Password"
                fullWidth
                name="password"
                value={password}
                onChange={ onInputChange }
                error={!!passwordValid && formSubmitted}
                helperText={passwordValid}
              />
            </Grid>

            <Grid 
              container 
              spacing={ 2 } 
              sx={{ mb: 2, mt: 1 }} 
              alignItems="center"
              justifyContent="center">
              <Grid item xs={ 12 } sm={6}>
                <Button 
                  variant='contained' 
                  fullWidth
                  type='submit'
                >
                  Register
                </Button>
              </Grid>
            </Grid>
            
            <Grid  sx={{ mr:2 }} container direction='row' justifyContent='end' alignItems="center">
              <Typography sx={{ mr:1 }}>¿Do you have an account?</Typography>
              <Link  component={ RouterLink } color='inherit' to="/auth/login">
                Login
              </Link>
            </Grid>
            
          </Grid>

        </form>
      </AuthLayout>
        
     
  )
}

