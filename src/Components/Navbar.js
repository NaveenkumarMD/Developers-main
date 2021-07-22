import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import '../Styles/Navbar.css'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import menuicon from '../assets/menu.svg'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import firebase from 'firebase'
const items = [
    {
        id: 0,
        name: 'Cobol'
    },
    {
        id: 1,
        name: 'JavaScript'
    },
    {
        id: 2,
        name: 'Basic'
    },
    {
        id: 3,
        name: 'PHP'
    },
    {
        id: 4,
        name: 'Java'
    }
]
function Navbar(props) {
    const [width, setWidth] = useState(window.innerWidth)
    const history = useHistory()
    const [isOpen, setIsOpen] = useState(false)
    const [items,setitems]=useState([])
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const updateDimensions = () => {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions)
        return () => {
            window.removeEventListener("resize", updateDimensions)
        }
    }, [])
    const search=()=>{
        firebase.firestore().collection('users').onSnapshot(querysnapshot=>{
            var peoplearray=[]
            querysnapshot.forEach(res=>{
                console.log(res.data())
                peoplearray.push(res.data())
            })
            setitems(peoplearray)
        }) 
    }
    const handleOnSelect = (item) => {
        history.replace(`/view/${item.email}`)
    }
    if (width > 700) {
        return (
            <div>
                <div className="navbar" style={{ backgroundColor: props.bg }}>
                    <div className="left-nav">
                        <div className="navbar-icon-container" style={{ color: props.brandcolor }}>
                            CIT
                        </div>
                        <div className="nav-list">
                            <ul>
                                <li onClick={() => history.push("/")}>Home</li>
                                <li onClick={() => history.push("/Allclubs")}>All clubs</li>
                                <li onClick={() => history.push("/Profile")}>Profile</li>
                                <li onClick={() => history.push("/")}></li>

                            </ul>
                        </div>
                    </div>
                    {props.login &&
                        <div className="right-nav">
                            <div>
                                <button className="green-solid-button" style={{ padding: "5px 20px" }}>Log in</button>
                            </div>
                            <div>
                                <span className="" style={{ backgroundColor: props.bg, padding: "5px 20px", color: props.brandcolor, cursor: "pointer" }} onClick={() => console.log(width)}>Sign up</span>
                            </div>
                        </div>
                    }
                    {props.search &&
                        <div className="right-search" onClick={search}>
                            <ReactSearchAutocomplete
                                items={items}
                                onSelect={handleOnSelect}
                                placeholder={"Find people"}

                            />
                        </div>}

                </div>
            </div>

        );
    }
    return (
        <div>
            <div className="float-icon-nav" onClick={toggleDrawer}>
                <img src={menuicon} alt="menu" />
            </div>
            <nav className="navbar" style={{ backgroundColor: props.bg, height: "50px" }}>
                <div className="navbar-icon-container" style={{ color: props.brandcolor, paddingLeft: "20px", fontSize: "24px" }} >
                    CIT
                </div>
                <div style={{ padding: "20px" }} onClick={toggleDrawer}>
                    <img src={menuicon} alt="menu" />
                </div>

            </nav>
            <Drawer open={isOpen} onClose={toggleDrawer} direction='left' size={270} style={{ backgroundColor: props.bg }}>
                <div className="toggler-content">
                    <div className="nav-items-list">
                        <ul>
                            <li onClick={() => history.push("/")}>Home</li>
                            <li  onClick={() => history.push("/")}>All clubs</li>
                            <li  onClick={() => history.push("/profile")}>Profile</li>
                            <li  onClick={() => history.push("/About")}>About</li>
                        </ul>
                    </div>
                </div>
            </Drawer>
        </div>
    )

}
export default Navbar