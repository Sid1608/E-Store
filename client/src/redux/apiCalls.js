import { loginFailure, loginStart, loginSuccess,logout } from "./userRedux"
import {publicRequest} from "../requestMethods.js";
import { registerSuccess } from './userRedux';
import { registerFailure } from './userRedux';
import { registerStart } from './userRedux';
export const login =async (dispatch,user)=>{
    dispatch(loginStart());
    try {
        const res=await publicRequest.post("/auth/login",user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure)
    }
}
export const register = async (dispatch, user) => {
    dispatch(registerStart());
    try {
      const res = await publicRequest.post('/auth/register', user);
      dispatch(registerSuccess(res.data));
    } catch (error) {
      dispatch(registerFailure());
    }
  };

  export const Logout = async (dispatch, user) => {
    console.log("in logout")
    try {
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };