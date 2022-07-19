import { useDispatch, useSelector } from "react-redux/es/exports";

import { Button, Grid, TextField, Typography } from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";
import { useForm } from "../../hooks/useForm";
import { useEffect, useMemo } from "react";
import { saveNote, setActiveNote } from "../../store/journal";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {

  const dispatch = useDispatch();

  const { active: note, messageSaved, isSaving } = useSelector((state) => state.journal);
  const { body, title, date, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState])
  
  useEffect(() => {
    if( messageSaved.length > 0){
      console.log(messageSaved);
      Swal.fire('Note updated', messageSaved, 'success')
    }
  }, [messageSaved])
  

  const onSaveNote = () => {
    dispatch(saveNote())
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      sx={{ mb: 1 }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <Button 
          disabled={isSaving}
          color="primary" 
          sx={{ padding: 2 }}
          onClick={onSaveNote}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Enter a title"
          label="Title"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="What happened today?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>
    </Grid>
  );
};
