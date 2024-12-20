import React from 'react'
import Product from './Product'

const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/assets/images/home/iphone__kqge21l9n26q_og.png" class="d-block w-100" alt="Gadget" height="500px"/>
    </div>
                        <div class="carousel-item">
                            <img src="/assets/images/home/other-value-tradein-202401.png" class="d-block w-100" alt="Gadget" height="500px"/>
    </div>
                            <div class="carousel-item">
                                <img src="/assets/images/home/Apple-Watch-S9-hero-230912.jpg.og.jpg" class="d-block w-100" alt="Gadget" height="500px"/>
    </div>
                            <div class="carousel-item">
                                <img src="/assets/images/home/apple-ipad.jpeg" class="d-block w-100" alt="Gadget" height="500px"/>
    </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Precedentul</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Urmatorul</span>
                            </button>
                        </div>
                        <Product/>
                    </div>
                    )
}

                    export default Home
