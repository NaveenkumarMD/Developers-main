import React, { useEffect,useState,lazy,Suspense} from 'react'
import '../../Styles/Profile.css'
import pic from '../../assets/profile.svg'
import '../../Styles/Profile-feeds.css'
//import Feed from '../Feed'
import '../../Styles/Bottom-nav.css'

import feed from '../../assets/bottomnav/feed.svg'
import groups from '../../assets/bottomnav/groups.svg'
import profile from '../../assets/bottomnav/profile.svg'
import settings from '../../assets/bottomnav/settings.svg'
import feedg from '../../assets/bottomnav/feedg.svg'
import groupsg from '../../assets/bottomnav/groupsg.svg'
import profileg from '../../assets/bottomnav/profileg.svg'
import settingsg from '../../assets/bottomnav/settingsg.svg'

import ClipLoader from "react-spinners/ClipLoader";



const  Navbar =lazy(()=>import("../Navbar"))
const Feed=lazy(()=>import("../Feed"))
const Clubsjoined=lazy(()=>import("../Clubsjoined"))
const PersonalInfo =lazy(()=>import("../Profileinfo"))






function Profile() {
    const [tab,setTab]=useState("f")
    useEffect(() => {
        document.body.style.background = "#24B47E"
        return () => {
            document.body.style.background = "none"
        }
    }, [])
    return (
        <Suspense fallback="
        <ClipLoader color={'white'} loading={true}  size={150} />" >
        <div>
            <Navbar bg="#181818" brandcolor="#24B47E" search />
            <div class="wrapper">
                <div class="sidebar">
                    <div className="sidebar-top">
                        <div className="profile-pic">
                            <img src={pic} alt="pic" height="50px" width="50px" />
                        </div>
                        <div className="profile-name white-text">
                            <div>Naveenkumar M</div>
                            <div style={{ fontSize: "13px", color: "gray" }}>1905097cse@cit.edu.in</div>
                        </div>
                    </div>
                    <div className="list-it">
                        <ul>
                            <li onClick={()=>setTab("p") } style={{backgroundColor:tab=== "p" ?"#24B47E":"#181818"}}>Personal Info</li>
                            <li onClick={()=>setTab("c")} style={{backgroundColor:tab=== "c" ?"#24B47E":"#181818"}}>Clubs joined </li>
                            <li onClick={()=>setTab("s")} style={{backgroundColor:tab=== "s" ?"#24B47E":"#181818"}}>Settings</li>
                            <li onClick={()=>setTab("f")} style={{backgroundColor:tab=== "f" ?"#24B47E":"#181818"}}>Feed</li>
                            <li onClick={()=>alert("logout")} style={{backgroundColor:"white",color:"#181818"}}>Logout</li>

                        </ul>
                    </div>


                </div>
                <div class="main">
                    {tab==="p" && <PersonalInfo/>}
                    {tab==="c" && <Clubsjoined/>}
                    {tab==="s" && <Settings/>}
                    {tab==="f" && <Feed/>}
                    <div className="bottom-nav">
                        <div className="bottom-icon" onClick={()=>setTab("p") } style={{color:tab=== "p" ?"#24B47E":"#181818"}}>
                 
                            {tab==="p" ?<img src={profileg} alt="profile" className="bottom-nav-image"/> :<img src={profile} alt="profile" className="bottom-nav-image"/>}
                            <div className="bottom-icon-description" style={{color:tab=== "p" ?"#24B47E":"white"}}>Profile</div>
                        </div>
                        <div className="bottom-icon" onClick={()=>setTab("c") }>
                        {tab==="c" ?<img src={groupsg} alt="profile" className="bottom-nav-image"/> :<img src={groups} alt="profile" className="bottom-nav-image"/>}
                            <div className="bottom-icon-description"  style={{color:tab=== "c" ?"#24B47E":"white"}}>Clubs</div>
                        </div>
                        <div className="bottom-icon" onClick={()=>setTab("f") }>
                        {tab==="f" ?<img src={feedg} alt="profile" className="bottom-nav-image"/> :<img src={feed} alt="profile" className="bottom-nav-image"/>}
                            <div className="bottom-icon-description"  style={{color:tab=== "f" ?"#24B47E":"white"}}>My Feed</div>
                        </div>
                        <div className="bottom-icon" onClick={()=>setTab("s") }>
                        {tab==="s" ?<img src={settingsg} alt="profile" className="bottom-nav-image"/> :<img src={settings} alt="profile" className="bottom-nav-image"/>}
                            <div className="bottom-icon-description"  style={{color:tab=== "g" ?"#24B47E":"white"}}>Settings</div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        </Suspense>
    )
}
export default Profile


function Settings(){
    return (
        <div>Settings</div>
    )
}