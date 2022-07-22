
import { async } from "@firebase/util";
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { fileUpload, loadNotes } from "../../helpers";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice";

export const startNewNote = ( ) => {
    return async( dispatch, getState ) => {
        
        dispatch( savingNewNote() )

        const { uid } = getState().auth;
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ));
        await setDoc( newDoc, newNote );

        newNote.id = newDoc.id;

        
        dispatch( addNewEmptyNote(newNote) )
        dispatch( setActiveNote( newNote ))
        
    }
}

export const startLoadingNotes = () => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth;
        if( !uid ) throw new Error('the uid of the user is not valid')
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes))
    }
}

export const saveNote = () => {
    return async( dispatch, getState ) => {

        dispatch(setSaving());
        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFiresStore = { ...note };
        delete noteToFiresStore.id

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` );
        await setDoc( docRef, noteToFiresStore, { merge: true})
        
        dispatch(updateNote(note))
    }
}

export const startUploadingFiles = ( files = [] ) => {
    return async( dispatch ) => {
        dispatch( setSaving() );
        
        const fileUploadPromises = [];

        for( const file of files){
            fileUploadPromises.push( fileUpload( file ) )
        }
        
        const photosUrls = await Promise.all( fileUploadPromises );
        
        dispatch( setPhotosToActiveNote( photosUrls ))
    }
}