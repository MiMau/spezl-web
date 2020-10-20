import React, {useEffect, useState} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee,faLaptopCode, faGamepad,faLaptopHouse, faUserSecret, faMouse} from '@fortawesome/free-solid-svg-icons'

interface IHero {
    scrollElement?: string
}

const Hero = () => {
    const [container, setContainer] = useState<HTMLElement | undefined>(undefined)

    function listener(): any {
        if (container) {
            const scroll = (window.pageYOffset / (container.offsetHeight - window.innerHeight))
            document.body.style.setProperty('--scroll', `${scroll}`);
        }
    }

    useEffect(() => {
        const element = document.getElementById("hero-container")
        if (element) {
            setContainer(element)
        }
        window.addEventListener('scroll', listener, false)


        return () => {
            if (container) {
                window.removeEventListener('scroll', listener)
            }
        }
    })

    return (

        <div id="hero-container" className="hero-container">
            <div className="background-wrap fixed-to-absolute">
                <div className="sun"></div>
                <div className="background-img sun-rise-shadow">
                    <div className="products">
                        <div>
                            <FontAwesomeIcon icon={faLaptopCode}/>
                            <h3>Proffesioneller Webauftritt mit richtigen Code</h3>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faLaptopHouse}/>
                            <h3>Homeoffice leicht gemacht</h3>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faUserSecret}/>
                            <h3>Sicherheit für Ihr Netzwerk</h3>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faGamepad}/>
                            <h3>Gaming Hardware? Kein Problem! GG</h3>
                        </div>
                    </div>
                    <div className="hero-scroll">
                        <FontAwesomeIcon icon={faMouse}/>
                        <span>Scroll down</span>
                    </div>
                </div>
            </div>
        </div>


    )
}


export default Hero;
