import React from 'react';
import Hero from "./hero";

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Hero></Hero>
                <div className="card primary">
                    <h3>About us & Unsere Philosophie</h3>
                    <hr/>
                    <p>
                        Unser gemeinschaftliches Ziel von SPEZL-IT besteht darin, die über Jahre üblichen Apotheken Preise der Dienstleister entgegen zu treten, um Gewerbetätigen bis hin zu mittelständigen Firmen, IT-Dienstleistung, Beratung …etc. optimal anzubieten. Unter den Reiter Dienstleistungen finden Sie eine detailliertere Auflistung.
                        Wir möchten Ihr „Spezl“ des Vertrauens sein!  ………….etc.
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;
