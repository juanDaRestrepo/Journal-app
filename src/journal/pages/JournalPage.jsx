import { IconButton, Typography } from '@mui/material'
import {AddOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { startNewNote } from '../../store/journal/thunks'
import { ImageGallery } from '../components'

export const JournalPage = () => {
  const dispatch = useDispatch();
  const {isSaving, active } = useSelector(state => state.journal)
  const onClickNewNote = () => {
    dispatch(startNewNote())
  }

  return (
    <JournalLayout className="animate__animated animate__fadeIn animate__faster">
     {/*  <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, veritatis? Voluptates officia dignissimos nemo nihil provident? Reiciendis dicta officia, minus cumque non culpa. Nemo temporibus provident officiis voluptatibus ab odit!</Typography> */}
     {!active ? <NothingSelectedView /> : <NoteView/>}
     {active && <ImageGallery /> }
      {/* <NoteView /> */}
     {/* */}
     <IconButton
        disabled={isSaving}
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


