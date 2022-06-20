import { IconButton, Typography } from '@mui/material'
import {AddOutlined } from '@mui/icons-material'
import { ImageGallery } from '../components'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'

export const JournalPage = () => {
  return (
    <JournalLayout>
     {/*  <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, veritatis? Voluptates officia dignissimos nemo nihil provident? Reiciendis dicta officia, minus cumque non culpa. Nemo temporibus provident officiis voluptatibus ab odit!</Typography> */}
     <NothingSelectedView />
      {/* <NoteView /> */}
     {/* <ImageGallery /> */}
     <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
     >
      <AddOutlined sx={{ fontSize: 30 }} />
     </IconButton>
    </JournalLayout>
    
  )
}


