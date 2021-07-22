import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "../../Styles/Login.css"
import show from '../../assets/eyeopen.png'
import hide from '../../assets/hide.png'
import svg from '../../assets/login.svg'

import ClipLoader from "react-spinners/ClipLoader";

//redux
import firebase from 'firebase'
import { Loginuser } from '../../Actions/Authactions'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'

function LoginPage(props) {
    const [passwordvisible, setPasswordvisible] = useState(false)
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [flag, setFlag] = useState(false)
    const dispatch = useDispatch()
    const history=useHistory()
    const globalstate = useSelector((state) => state.auth.userdetails)
    const [loading, Setloading] = useState(false)

    useEffect(() => {
        if (flag) {
            Setloading(false)
            if (globalstate.user.err) {
                toast.error(globalstate.user.err)
            }
            if (globalstate.user.email) {                
                toast.success("Login success")
                setTimeout(()=>{
                    history.push("/")
                },2000)
            }
        }

    }, [globalstate])
   const check = (e) => {
        Setloading(true)
        e.preventDefault()
        let valid = "@cit.edu.in"
        let mail_input = mail.slice(-11)

        if (mail === "" || password === "") {
            alert('Fill all fields')
        }
        else {
            if (mail_input === valid) {
                let doc = {
                    email: mail,
                    password: password
                }
                dispatch(Loginuser(doc))
                setFlag(true)

            }
            else {
                toast.warning("Enter a valid Email id")
                Setloading(false)
            }
        }

    }
    return (
        <div className="Login-container">
            <ToastContainer hideProgressBar />

            <div className="container1">
                <div className="form-container">
                    <div className="white-text large-text">
                        Login to your account

                    </div>
                    <div className="white-text">
                        Welcome back
                    </div>
                    <div>
                        <form className="login-form">
                            <div className="login-input-container">
                                <label className="login-label">Email address</label><br />
                                <input className="login-input" value={mail} onChange={(e) => setMail(e.target.value)} />
                            </div>
                            <div className="login-input-container">
                                <label className="login-label">Password</label><br />
                                <div className="password-container">
                                    <input className="password-input" spellCheck="false" type={!passwordvisible ? "password" : "text"} value={password} onChange={(e) => setPassword(e.target.value)}></input>
                                    <img src={!passwordvisible ? show : hide} className="password-show-icon" onClick={() => setPasswordvisible(!passwordvisible)} />
                                </div>

                            </div>
                            <div className="login-input-container">
                                {
                                    loading ? <button className="green-solid-button" onClick={(e) => check(e)} >
                                        <ClipLoader color={"white"} loading={loading} size={10} />
                                    </button> : <button className="green-solid-button" onClick={(e) => check(e)} >Login</button>
                                }



                            </div>
                        </form>
                        <div className="login-input-container white-text">New to Clubapp? <Link className="link" to="/Signup">Register here</Link></div>
                    </div>
                </div>
            </div>
            <div className="empty-space">
                <div>
                    <div className="white-text large-text info-text">Welcome to the CIT's greatest community ever</div>
                    <div className="info-text1">Manage all your club activities in a single place</div>
                    <div>
                        <img src={svg} className="login-svg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage

