import { Link as RouterLink } from 'react-router-dom';
import { Google} from "@mui/icons-material";
import { Button, Grid, TextField, Typography, Link  } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';


export const RegisterPage = () => {
  return (
      <AuthLayout title="Register">
        <form>
          <Grid container>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Fullname"
                type="text"
                placeholder="Enter your fullname"
                fullWidth
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Email"
                type="email"
                placeholder="email@google.com"
                fullWidth
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Password"
                type="password"
                placeholder="Password"
                fullWidth
              />
            </Grid>

            <Grid 
              container 
              spacing={ 2 } 
              sx={{ mb: 2, mt: 1 }} 
              alignItems="center"
              justifyContent="center">
              <Grid item xs={ 12 } sm={6}>
                <Button variant='contained' fullWidth>
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

