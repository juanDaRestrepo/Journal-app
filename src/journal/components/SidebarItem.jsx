import { TurnedInNot } from '@mui/icons-material'
import { Divider, Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/journal'

export const SidebarItem = ({title= '', body, id, date, imageUrls = [] }) => {
    
    const dispatch = useDispatch();
    const newTitle = useMemo( () => {
        return title.length > 15
            ? title.substring(0, 17) + '...'
            : title;
    },[title])
    
    const newBody = useMemo( () => {
        return body.length > 19
            ? body.substring(0, 19) + '...'
            : body;
    },[body])
    

    const onClickNote = () => {
        dispatch(setActiveNote({id, title, body, date, imageUrls}))
    }

    return (
        <ListItem key={id} disablePadding>
            <ListItemButton
                onClick={ onClickNote }
            >
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={newBody} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
