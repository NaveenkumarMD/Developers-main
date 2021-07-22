import { LOGIN, SIGNUP } from './types'
import firebase from 'firebase'
export const Loginuser = (data) => async (dispatch, getState) => {
    firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then(usercredentials=>{
            firebase.firestore().collection('users').doc(usercredentials.user.uid).get().then(res=>{
                console.log(res)
                if(!res.data()){
                    console.log("user not found")
                }
                dispatch({
                    type:LOGIN,
                    payload:{
                        user:{
                            ...res.data(),
                            id:usercredentials.user.uid
                        }
                    }
                })
            })
        })
        .catch(err=>{
            dispatch({
                type:LOGIN,
                payload:{
                    user:{
                        err:err.message
                    }
                }
            })
        })


}
export const Signupuser = (data) => async (dispatch, getState) => {
    var response = null


}
export const getuserDetails=()=>(dispatch,getState)=>{
    const id=getState().auth.userdetails.user.id
    firebase.firestore().collection('users').doc(id).onSnapshot(res=>{
        dispatch({
            type:LOGIN,
            payload:{
                user:{
                    ...res.data(),
                    id:id
                }
            }
        })
    })
}