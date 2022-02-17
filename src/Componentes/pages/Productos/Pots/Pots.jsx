import React from 'react';

const Pots = () => {

    return (
        <div className="container my-5">
        <div className="row align-items-center justify-content-center mt-5 mb-3">
            <div className="col-12 d-flex align-items-center justify-content-start">
                <h1 className="promo mt-5">Macetas</h1>
            </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5">
            <div className="col">
                <div className="card h-100">
                    <img src="/img/Products/Macetas/florero-copa.jpg" className="card-img-top" alt="Florero Copa"/>
                        <div className="card-body d-flex flex-column align-items-center justify-content-center">
                            <p className="card-text">Florero Copa</p>
                            <span>$1300</span>
                            <button type="button" className="btn btn-success mt-2">Comprar</button>
                        </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src="/img/Products/Macetas/maceta-aguamanil.jpg" className="card-img-top" alt="Maceta Aguamanil"/>
                        <div className="card-body d-flex flex-column align-items-center justify-content-center">
                            <p className="card-text">Maceta Aguamanil</p>
                            <span>$1450</span>
                            <button type="button" className="btn btn-success mt-2">Comprar</button>
                        </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src="/img/Products/Macetas/maceta-redonda-gigante.jpg" className="card-img-top" alt="Maceta Redonda Gigante"/>
                        <div className="card-body d-flex flex-column align-items-center justify-content-center">
                            <p className="card-text">Maceta Redonda Gigante</p>
                            <span>$1980</span>
                            <button type="button" className="btn btn-success mt-2">Comprar</button>
                        </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src="/img/Products/Regala/maceta-bolita.jpg" className="card-img-top" alt="Maceta Bolita"/>
                        <div className="card-body d-flex flex-column align-items-center justify-content-center">
                            <p className="card-text">Maceta Colgante Esgrafiada</p>
                            <span>$980</span>
                            <button type="button" className="btn btn-success mt-2">Comprar</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
    )
};

export default Pots;







