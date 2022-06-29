import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAunthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();
        console.log(result);
        if(!result.ok) {
            dispatch(logout(result))
        }else{
            dispatch(login(result))
        }
        
    }   
}