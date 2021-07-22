import React, { useState, useEffect } from 'react'
import '../../Styles/Signup.css'
import '../../Styles/index.css'
import svg from '../../assets/signup.svg'
import Tilt from 'react-parallax-tilt';
import { useHistory } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";

//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//redux
import firebase from 'firebase';

function Signup(props) {
    const history = useHistory()
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")
    const [type, Settype] = useState("Hosteller")
    const [loading, setloading] = useState(false)

    useEffect(() => {
        document.body.style.background = "#181818"
    }, [])
    const check = async (e) => {
        e.preventDefault()
        setloading(true)
        let valid = "@cit.edu.in"
        let mail_input = mail.slice(-11)

        let valid_password = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')

        if (name === "" || mail === "" || password === "" || mobile === "") {
            toast.warning("Enter all the fields")
        }

        if (mail_input === valid && mobile.length === 10 && valid_password.test(password)) {
            let details = {
                name: name,
                email: mail,
                number: mobile,
                type: type,
            }
            await firebase.auth().createUserWithEmailAndPassword(details.email, password)
                .then(res => {
                    firebase.firestore().collection('users').doc(res.user.uid).set({
                        ...details
                    }).then(res => {
                        toast.success("Signup succesfull")
                        setloading()
                        setTimeout(() => {
                            history.push("/Login")
                        }, 2000)
                    }).catch(err => {
                        toast.error(err.message)
                        setloading(false)
                    })
                }).catch(err => {
                    toast.error(err.message)
                    setloading(false)
                })
        }
        else {
            toast.error("Enter valid details")
            setloading(false)
        }
    }

    return (
        <div className="signup-bg">
            <ToastContainer hideProgressBar />
            <div className="signup-container">
                <div className="signup-flex">
                    <div>
                        <div>
                            <div className="text-large">Create Account</div>
                            <div className="text-small">Connect with everyone in the CIT</div>
                        </div>
                        <div>
                            <form>
                                <div className="flex-4">
                                    <div className="form-item">
                                        <label for="first-name" className="label">Name</label><br />
                                        <input name="first-name" className="input" spellCheck='false' value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="form-item">
                                        <label for="first-name" className="label">Dayscholars/Hosteller</label><br />
                                        <select name="first-name" className="input1" onChange={(e) => Settype(e.target.value)} >
                                            <option value="Hosteller">Hosteller</option>
                                            <option value="Dayscholar">Dayscholar</option>
                                        </select>

                                    </div>
                                </div>
                                <div className="flex-4">
                                    <div className="form-item">
                                        <label for="first-name" className="label">E-mail</label><br />
                                        <input name="first-name" className="input" spellCheck='false' value={mail} onChange={(e) => setMail(e.target.value)} />
                                    </div>
                                    <div className="form-item">
                                        <label for="first-name" className="label">Mobile</label><br />
                                        <input name="first-name" className="input" spellCheck='false' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-item" >
                                    <label for="first-name" className="label">Password</label><br />
                                    <input name="first-name" className="input pass" type="Password" spellCheck='false' value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="sigup-button">
                                    {
                                        loading ? <button className="green-solid-button form-item" onClick={(e) => check(e)} style={{ margin: "20px" }}>
                                            <ClipLoader color={"white"} loading={loading} size={10} />
                                        </button> :
                                            <button className="green-solid-button form-item" onClick={(e) => check(e)} style={{ margin: "20px" }}>Sign up</button>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="svg-content">
                        <div className="flex-2">
                            <div className="flex-3">
                                <br /><br /><br /><br /><br />
                                <div className="text-medium">Already a member?</div>
                                <div>

                                    <button className="button-green-outline" onClick={() => history.push("/Login")}>LOGIN</button>
                                </div>
                            </div>
                            <Tilt>
                                <img src={svg} className="svg" alt="svg" />
                            </Tilt>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: "center" }} className="already">
                    <div>Already a member?<>Login</></div>
                </div>

            </div>
        </div>
    )
}
export default Signup


