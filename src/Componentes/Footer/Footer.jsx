import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-md-4 mt-5 ps-5">
                        <h4>Categorías</h4>
                        <ul className="my-4 p-0">
                            <li className="my-2"><a href="/">Inicio</a></li>
                            <li className="my-2"><a href="/productos">Productos</a></li>
                            <li className="my-2"><a href="/contacto">Contacto</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 mt-5 ps-5">
                        <h4>Contactános</h4>
                        <ul className="my-4 p-0">
                            <li className="my-2">
                                <a href="/">543512285692</a>
                            </li>
                            <li className="my-2">
                                <a href="/">3512285692</a>
                            </li>
                            <li className="my-2">
                                <a href="/">tiendaketrawe@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 mt-5 ps-5">
                        <h4>Sigamos conectados</h4>
                        <a href="/">
                            <svg className="icon-inline icon-lg  m-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                            </svg>
                        </a>
                        <a href="/">
                            <svg className="icon-inline icon-lg m-3" viewBox="0 0 320 512">
                                <path d="M279.1 288l14.3-92.7h-89v-60c0-25.4 12.5-50.2 52.3-50.2H297V6.4S260.4 0 225.4 0C152 0 104.3 44.4 104.3 124.7v70.6H22.9V288h81.4v224h100.2V288z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;