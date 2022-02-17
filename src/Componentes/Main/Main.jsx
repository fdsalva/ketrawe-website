import React from 'react';

const Main = () => {
    return (
        <main>
            <section className="hero">
                <div className="container-hero">
                    <img
                        src="/img/hero-ketrawe.jpg"
                        className="hero-img"
                        alt="Hero Ketrawe"
                    />
                </div>
            </section>
            <section className="cards-promo">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12 d-flex align-items-center justify-content-center">
                            <h1 className="promo">Muy Ketrawe!</h1>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <img
                                    src="/img/Products/Promos/chiquihuerta.jpg"
                                    className="card-img-top"
                                    alt="Chiquihuerta (juego de huerta para niñes)"
                                />
                                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                    <p className="card-text">
                                        Chiquihuerta (juego de huerta para niñes)
                                    </p>
                                    <span>$2.500</span>
                                    <button type="button" className="btn btn-success mt-2">
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img
                                    src="/img/Products/Promos/venezuela-monstera.jpg"
                                    className="card-img-top"
                                    alt="Venezuela Monstera"
                                />
                                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                    <p className="card-text">
                                        Venezuela Monstera
                                    </p>
                                    <span>$1.200</span>
                                    <button type="button" className="btn btn-success mt-2">
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img
                                    src="/img/Products/Promos/facetada.jpg"
                                    className="card-img-top"
                                    alt="Facetada"
                                />
                                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                    <p className="card-text">
                                        Juego de macetas facetadas
                                    </p>
                                    <span>$1.800</span>
                                    <button type="button" className="btn btn-success mt-2">
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img
                                    src="/img/Products/Promos/kit-jardineria.jpg"
                                    className="card-img-top"
                                    alt="Kit de Jardinería"
                                />
                                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                    <p className="card-text">
                                        Kit de Jardinería
                                    </p>
                                    <span>$2.100</span>
                                    <button type="button" className="btn btn-success mt-2">
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row align-items-center justify-content-center mt-5">
                        <div className="col-12 d-flex align-items-center justify-content-center">
                            <h1 className="promo mt-5">Regalá Vida.</h1>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <img
                                    src="/img/Products/Regala/kit-sahumos.jpg"
                                    className="card-img-top"
                                    alt="Kit Sahumos"
                                />
                                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                    <p className="card-text">
                                        Kit de Sahumos
                                    </p>
                                    <span>$980</span>
                                    <button type="button" className="btn btn-success mt-2">
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img
                                    src="/img/Products/Regala/aglaonema-pink.jpg"
                                    className="card-img-top"
                                    alt="Aglaonema Pink"
                                />
                                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                    <p className="card-text">
                                        Aglaonema Rosa
                                    </p>
                                    <span>$800</span>
                                    <button type="button" className="btn btn-success mt-2">
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img
                                    src="/img/Products/Regala/florero-pintitas.jpg"
                                    className="card-img-top"
                                    alt="Florero Pintitas"
                                />
                                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                    <p className="card-text">
                                        Florero con pintitas
                                    </p>
                                    <span>$1.100</span>
                                    <button type="button" className="btn btn-success mt-2">
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img
                                    src="/img/Products/Regala/maceta-bolita.jpg"
                                    className="card-img-top"
                                    alt="Maceta Bolita"
                                />
                                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                    <p className="card-text">
                                        Maceta Esgrafiada pequeña
                                    </p>
                                    <span>$900</span>
                                    <button type="button" className="btn btn-success mt-2">
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="_deliver">
                    <img src="/img/envio-cba-ketrawe.jpg" alt="" />
                </div>
            </section>
        </main>
    )
}

export default Main;
