import poster from '../assets/tet.png'
import ShowMoreText from 'react-show-more-text';
import like from '../assets/Heart.svg'
import comment from '../assets/comment.svg'
import share from '../assets/share.svg'
import { ShareButtonIconOnly, ShareBlockStandard } from 'react-custom-share';
import FaTwitter from "../assets/twitter.gif";
import Fawhatsapp from "../assets/whatsapp.gif";
import Fafacebook from "../assets/facebook.gif";
import Modal from 'react-modal';
import React, { useState } from 'react'
import close from '../assets/close.png'
import LazyLoad, { lazyload } from 'react-lazyload'
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Twitter = () => {
    return <img src={FaTwitter} width={30} height={30} />
}
const Facebook = () => {
    return <img src={Fafacebook} width={30} height={30} />
}
const Whatsapp = () => {
    return <img src={Fawhatsapp} width={30} height={30} />
}
const shareBlockProps = {
    url: "https://github.com/greglobinski/react-custom-share",
    button: ShareButtonIconOnly,
    buttons: [
        { network: "Twitter", icon: Twitter },
        { network: "Facebook", icon: Facebook },


    ],
    text: "Give it a try - react-custom-share component",
    longtext:
        "Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch."
};
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "200px",
        height: "130px",
        padding: "20px",

    },
};
function Feed() {
    const [modalopen, setmodalopen] = useState(false)
    function executeOnClick(isExpanded) {
        console.log(isExpanded);
    }
    return (
        <div className="profile-feed-container">
            <Modal isOpen={modalopen} style={customStyles}>
                <div style={{ fontSize: "24px", marginBottom: "20px" }} className="green-text">Share</div>
                <div style={{ position: "absolute", top: "25px", right: "20px", cursor: "pointer" }} onClick={() => setmodalopen(false)}><img src={close} style={{ width: "20px", height: "20px" }} /></div>
                <ShareBlockStandard {...shareBlockProps} />
            </Modal>

            <div className="profile-feed-card">
                <LazyLoadImage 
                    src={poster} className="profile-poster" effect="blur"
                />
                <div className="icons-bar">
                    <div>
                        <img src={like} alt="like" className="sh-icon" />
                        <img src={comment} alt="comment" className="sh-icon" onClick={()=>{
                            document.getElementById('comments-container').style.display="block"
                        }} />
                    </div>
                    <div><img src={share} alt="share" className="sh-icon" onClick={() => setmodalopen(!modalopen)} />
                    </div>
                </div>
                <div className="comments-container" id="comments-container">
                    <div className="white-text">Comments</div>
                </div>
                <div className="bottom-feed white-text">
                    <div style={{ margin: "20px" }}><ShowMoreText
                        lines={2}
                        more='more'
                        less='less'
                        className='content-css'
                        anchorClass='my-anchor-css-class'
                        onClick={executeOnClick}
                        expanded={false}
                        width={580}
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
    )
}
export default Feed