import { IconButton, Typography } from '@mui/material'
import {AddOutlined } from '@mui/icons-material'
import { useDispatch } from 'react-redux/es/exports'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../views'
import { startNewNote } from '../../store/journal/thunks'

export const JournalPage = () => {
  const dispatch = useDispatch();
  
  const onClickNewNote = () => {
    dispatch(startNewNote())
  }

  return (
    <JournalLayout className="animate__animated animate__fadeIn animate__faster">
     {/*  <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, veritatis? Voluptates officia dignissimos nemo nihil provident? Reiciendis dicta officia, minus cumque non culpa. Nemo temporibus provident officiis voluptatibus ab odit!</Typography> */}
     <NothingSelectedView />
      {/* <NoteView /> */}
     {/* <ImageGallery /> */}
     <IconButton
        onClick={onClickNewNote}
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


