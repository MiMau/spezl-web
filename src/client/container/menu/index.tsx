import React, {useState} from 'react'


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

    return (
        <>
            <div className="menu-bar">
                <div>
                <span>
                    SPEZL-IT
                </span>
                </div>
                <div className="menu-link-bar">
                    {children}
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
        </>
    )
}


export default Menu;
