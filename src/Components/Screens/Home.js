import React, { useEffect } from 'react'
import "../../Styles/Home/Home.css"
import Navbar from '../Navbar'
import poster from '../../assets/tet.png'
import logo from '../../assets/clublogo.png'
import ShowMoreText from 'react-show-more-text';
import like from '../../assets/Heart.svg'
import comment from '../../assets/comment.svg'
import share from '../../assets/share.svg'
function Home() {
    useEffect(() => {
        document.body.style.background = "#181818"
        return () => {
            document.body.style.background = "none"
        }
    }, [])
    return (
        <div>
            <div className="create-feed">
                <div>+</div>
            </div>
            <Navbar bg="#181818" brandcolor="#24B47E" search />
            <div className="events">
                <div className="event-card">
                    <div className="card-head">
                        <img src={logo} alt="logo" className="club-logo" />
                        <div >
                            <div className="person-name">Naveenkumar M</div>
                            <div className="club-name">NSS</div>
                        </div>
                    </div>
                    <div>
                        <img src={poster} alt="poster" className="poster-main" />
                    </div>
                    <div className="icons-bar">
                        <div>
                            <img src={like} alt="like" className="sh-icon" />
                            <img src={comment} alt="comment" className="sh-icon" />
                        </div>
                        <div>
                            <img src={share} alt="share" className="sh-icon" />
                        </div>
                    </div>
                    <div className="bottom-feed white-text" style={{ backgroundColor: "#1F1F1F", marginBottom: "20px", paddingBottom: "20px" }}>
                        <div style={{ margin: "20px" }}><ShowMoreText
                            /* Default options */
                            lines={3}
                            more='more'
                            less='less'
                            className='content-css'
                            anchorClass='my-anchor-css-class'

                            expanded={false}
                            width={280}
                        >
                            Lorem ipsum dolor sit amet, consectetur ,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore

                            et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitationdfewafef
                            wfaedfwweafa4we
                        </ShowMoreText></div>
                    </div>
                </div>
                <div className="event-card">
                    <div className="card-head">
                        <img src={logo} alt="logo" className="club-logo" />
                        <div >
                            <div className="person-name">Naveenkumar M</div>
                            <div className="club-name">NSS</div>
                        </div>
                    </div>
                    <div>
                        <img src={poster} alt="poster" className="poster-main" />
                    </div>
                    <div className="icons-bar">
                        <div>
                            <img src={like} alt="like" className="sh-icon" />
                            <img src={comment} alt="comment" className="sh-icon" />
                        </div>
                        <div>
                            <img src={share} alt="share" className="sh-icon" />
                        </div>
                    </div>
                    <div className="bottom-feed white-text" style={{ backgroundColor: "#1F1F1F", marginBottom: "20px", paddingBottom: "20px" }}>
                        <div style={{ margin: "20px" }}><ShowMoreText
                            /* Default options */
                            lines={3}
                            more='more'
                            less='less'
                            className='content-css'
                            anchorClass='my-anchor-css-class'

                            expanded={false}
                            width={280}
                        >
                            Lorem ipsum dolor sit amet, consectetur ,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore

                            et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitationdfewafef
                            wfaedfwweafa4we
                        </ShowMoreText></div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home
