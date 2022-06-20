import { Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../views'

export const JournalPage = () => {
  return (
    <JournalLayout>
     {/*  <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, veritatis? Voluptates officia dignissimos nemo nihil provident? Reiciendis dicta officia, minus cumque non culpa. Nemo temporibus provident officiis voluptatibus ab odit!</Typography> */}
     <NothingSelectedView />
    </JournalLayout>
    
  )
}


