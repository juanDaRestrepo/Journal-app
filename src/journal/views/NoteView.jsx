import { Button, Grid, TextField, Typography } from '@mui/material'
import { SaveOutlined } from '@mui/icons-material';


export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' sx={{ mb: 1}}>
        <Grid>
            <Typography fontSize={ 39 } fontWeight='light'> 20 de junio de 2022</Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{ padding: 2}}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1}} />
                Guardar
            </Button>
        </Grid>
        <Grid container>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder='Enter a title'
                label='Title'
                sx={{ border: 'none', mb: 1}}
            />
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder='What happened today?'
                minRows={5}

            />
        </Grid>
        
    </Grid>
  )
}
