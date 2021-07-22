import React, { useEffect } from 'react'
import '../../Styles/Profilestyles/viewprofile.css'
import Navbar from '../Navbar'
import logo from '../../assets/clublogo.png'
import whatsapp from '../../assets/whatsapp.svg'
import down from '../../assets/down.png'
import call from '../../assets/call.png'
function Viewprofile() {
    useEffect(() => {
        document.body.style.background = "#181818"
        document.getElementById('call').setAttribute("href", `tel:${+918870499146}`)
        document.getElementById('whatsapp').setAttribute('href', `https://wa.me/${8870499146}`)
        return () => {
            document.body.style.background = "none"
        }
    }, [])
    return (
        <div>
            <Navbar bg="#181818" brandcolor="#24B47E" search />
            <div className="main-container-view-profile">
                <div className="view-profile-top">
                    <div className="view-profile-img-container">
                        <img src={logo} slt="logo" className="view-profile-profile" />
                    </div>
                    <div className="view-profile-container1">
                        <div className="white-text view-profile-name">Naveenkumar M</div>
                        <div className="white-text view-profile-mail">1905097cse@cit.edu.in</div>
                        <div className="contact-icons">
                            <div className="whatsapp-button">
                                <img src={whatsapp} style={{ paddingLeft: "10px", paddingRight: "10px" }} />
                                <a id="whatsapp">Whatsapp</a>
                            </div>
                            <div className="call-button">
                                <img src={call} style={{ paddingLeft: "10px", paddingRight: "10px", width: "24px" }} />
                                <a id="call" >Call</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="profile-info-head">Other Info</div>
                    <div>
                        <div className="profile-info-x">
                            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                                <span>Department</span>
                                <span><img src={down} style={{width:"20px",height:"20px"}}/></span></div>
                 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewprofile
