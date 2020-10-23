import React from 'react';
import Hero from "./hero";
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCss3, faHtml5, faJs, faReact} from "@fortawesome/free-brands-svg-icons";
// @ts-ignore
import Steinberger from "../../../assets/images/steinberger.png"
// @ts-ignore
import Tibold from "../../../assets/images/tiboldinformatik.png"


class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Hero></Hero>
                <div className="card primary">
                    <div className="card-body">
                        <h2>About us & Unsere Philosophie</h2>
                        <hr/>
                        <p>
                            Unser gemeinschaftliches Ziel von SPEZL-IT besteht darin, die über Jahre üblichen Apotheken
                            Preise der Dienstleister entgegen zu treten, um Gewerbetätigen bis hin zu mittelständigen
                            Firmen, IT-Dienstleistung, Beratung …etc. optimal anzubieten. Unter den Reiter
                            Dienstleistungen finden Sie eine detailliertere Auflistung.
                            Wir möchten Ihr „Spezl“ des Vertrauens sein! ………….etc.
                        </p>
                    </div>
                </div>
                <div className="card secondary">
                    <div className="card-body">
                        <h2>Webauftritt & Application</h2>
                        <hr/>
                        <div className="web-card">
                            <div className="web-image"></div>
                            <div className="web-plan web-plan-a">
                                <h3>Basic</h3>
                                <p>Von hand geschrieben in der Grundlegenden Sprache HTML</p>
                                <div className="web-tools">
                                    <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faCss3}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className="web-plan web-plan-b">
                                <h3>Basic Pro</h3>
                                <p>Von hand geschrieben in der Grundlegenden Sprache HTML & Javascript</p>
                                <div className="web-tools">
                                    <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faCss3}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className="web-plan web-plan-c">
                                <h3>Webapplication</h3>
                                <p>Webapplications speziell auf Ihr Buissnes zugeschnitten.</p>
                                <div className="web-tools">
                                    <FontAwesomeIcon icon={faCss3}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className="web-plan web-plan-d">
                                <h3>Application</h3>
                                <p>Smartphone Apps für IO’s und Android.</p>
                                <div className="web-tools">
                                    <FontAwesomeIcon icon={faCss3}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                        <NavLink to="/web" className="menu-link-button button-event">Mehr Informationen</NavLink>
                    </div>
                </div>
                <div className="card primary">
                    <div className="card-body">
                        <div className="kunde-row">
                            <img src={Steinberger} loading="lazy" alt="Steinberger"/>
                            <img src={Tibold} loading="lazy" alt="Tibold Informatik"/>
                        </div>
                    </div>
                </div>
                <div className="card secondary">
                    <div className="card-body gaming">
                        <span className="gaming-title">Be Prepared for your next Session</span>
                        <div className="gaming-img-a"></div>
                        <span className="gaming-text-a">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                            takimata sanctus est Lorem ipsum dolor sit amet. </span>
                        <div className="gaming-img-b"></div>
                        <span className="gaming-text-b">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                            takimata sanctus est Lorem ipsum dolor sit amet. </span>
                        <div className="gaming-img-c"></div>
                        <span className="gaming-text-c">GG WP</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
