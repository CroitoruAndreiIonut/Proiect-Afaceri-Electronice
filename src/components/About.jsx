import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">Despre noi</h1>
                        <p className="lead mb-4">
                            Suntem pasionați de tehnologie și inovație. Misiunea noastră este să aducem cele mai noi și mai utile gadgeturi direct în mâinile clienților noștri, oferindu-le o experiență unică și de înaltă calitate. Fie că ești în căutarea unui gadget smart pentru casă, a unui accesoriu inovator pentru telefonul tău sau a unei soluții tehnologice care îți va îmbunătăți stilul de viață, suntem aici pentru a te ajuta să descoperi cele mai interesante produse.
                        </p>
                        <p className="lead mb-4">
                        Ne mândrim cu o selecție atent aleasă, care include doar produse de încredere, testate și de la branduri renumite. În plus, suntem dedicați să oferim cele mai bune prețuri, livrare rapidă și un serviciu de asistență clienți excelent. Fiecare produs pe care îl găsești pe site-ul nostru a fost ales cu grijă pentru a satisface nevoile tale tehnologice și pentru a-ți îmbunătăți viața de zi cu zi.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contacteaza-ne</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/Imagine.jpg" alt="About Us" height="500px" width="700px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
