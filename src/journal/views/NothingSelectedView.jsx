import { Grid, Typography } from "@mui/material"
import { StarOutline} from "@mui/icons-material";


export const NothingSelectedView = () => {
  return (
    <Grid
        className="animate__animated animate__fadeIn animate__faster"
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh', backgroundColor: 'primary.main', borderRadius: 5}}
    >
        <Grid item xs={ 12 }>
            <StarOutline sx={{fontSize: 100, color: 'white'}}/>
        </Grid>
        <Grid item xs={ 12 }>
            <Typography>Create or select a note</Typography>
        </Grid>
    </Grid>
  )
}
