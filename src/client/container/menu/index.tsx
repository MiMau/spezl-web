import React, {useState} from 'react'
import Kontakt from "../kontakt";


const Menu = ({children}: any) => {
    const [isActive, setIsActive] = useState(false)

    function onClick() {
        if(!isActive){
            document.body.style.setProperty('overflow-y', 'hidden')
        }else {
            document.body.style.setProperty('overflow-y', 'auto')
        }
        setIsActive(!isActive)
    }


    const [openKontakt, setKontakt] = useState(false)

    function toggle() {
        setKontakt(!openKontakt)
    }

    return (
        <>
            <div className="menu menu-bar">
                <span className="menu-title" >
                    SPEZL-IT
                </span>
                <div className="menu-link-bar">
                    {children}
                    <button onClick={toggle} className="menu-link-button button-event">Kontakt</button>
                </div>
                <button
                    className={`hamburger hamburger--spin ${isActive ? "is-active" : ""}`}
                    type="button"
                    onClick={onClick}>
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
                </button>
            </div>
            <div className={`menu-background ${isActive ? "is-active" : ""}`}>
                {children}
            </div>
            <div className={`${openKontakt && "is-active"} kontakt-background`}>
                <Kontakt/>
            </div>
        </>
    )
}


export default Menu;
