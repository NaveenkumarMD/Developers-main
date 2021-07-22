import React, { useState, useEffect } from 'react'
import '../Styles/Profilestyles/personalinfo.css'
import logo from './../assets/clublogo.png'
import { useSelector, useDispatch } from 'react-redux'
import firebase from 'firebase'
import { toast, ToastContainer } from 'react-toastify'
import { getuserDetails } from '../Actions/Authactions'
import pen from '../assets/pen.png'
function PersonalInfo() {
    const store = useSelector(state => state.auth.userdetails.user)
    const dispatch = useDispatch()
    const [department, setDepartment] = useState(store.department)
    const [year, setYear] = useState(store.year)
    const [section, setSection] = useState(store.section)
    const [type, setType] = useState(store.type)
    const [mobile, setMobile] = useState(store.mobile)
    const [location, setLocation] = useState(store.location)
    const [editFlag, seteditFlag] = useState(false)
    useEffect(() => {
        dispatch(getuserDetails())
    }, [])
    const save = () => {

        var details = {
            department,
            year,
            section,
            type,
            mobile,
            location
        }
        firebase.firestore().collection('users').doc(store.id).set(details, { merge: true }).then(res => {
            toast.success("Saved")
            seteditFlag(false)
        })
    }
    return (
        <>
            <ToastContainer position="bottom-center" hideProgressBar />
            <div className="profile-details">

                <div className="top-bar-profile">

                    <div>
                        <img src={logo} alt="profile" className="user-image" />
                    </div>
                    <div>
                        <div className="name-profile">{store.name}</div>
                        <div className="mail-profile">{store.email}</div>
                    </div>
                </div>
                <div className="data-profile">
                    <div className="datum-profile">
                        <label >Department:</label><br />
                        <input disabled={!editFlag} value={department} onChange={e => setDepartment(e.target.value)} />
                    </div>
                    <div className="datum-profile">
                        <label >Year:</label><br />
                        <input disabled={!editFlag} value={year} onChange={e => setYear(e.target.value)} />
                    </div>
                    <div className="datum-profile">
                        <label >Section:</label><br />
                        <input disabled={!editFlag} value={section} onChange={e => setSection(e.target.value)} />
                    </div>
                    <div className="datum-profile">
                        <label >Hosteler/dayscholar:</label><br />
                        <input disabled={!editFlag} value={type} onChange={e => setType(e.target.value)} />
                    </div>
                    <div className="datum-profile">
                        <label >Mobile:</label><br />
                        <input disabled={!editFlag} value={mobile} onChange={e => setMobile(e.target.value)} />
                    </div>
                    <div className="datum-profile">
                        <label >Location:</label><br />
                        <input disabled={!editFlag} value={location} onChange={e => setLocation(e.target.value)} />
                    </div>

                </div>
                <div className="save-button">
                    {
                        editFlag ? <button onClick={() => save()} className="button-green-outline" style={{ backgroundColor: "black" }}>Save</button>
                            : <div className="edit-button" onClick={()=>seteditFlag(true)}>
                                <img src={pen} width={20} height={20}></img><span>Edit</span>
                            </div>
                    }



                </div>
            </div>
        </>
    )
}

export default PersonalInfo
