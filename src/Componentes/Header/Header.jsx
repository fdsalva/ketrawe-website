import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='body-header'>
            <header>
                <nav className="d-flex align-items-center">
                    <div className="container-fluid">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-4 col-lg-3 py-2 container-logo d-flex align-items-center justify-content-center">
                                <a href="/">
                                    <img className="logo-home" src="/img/ketrawe-logo.png" alt="Logo Tienda Ketrawe" />
                                </a>
                            </div>
                            <div className="col-12 order-3 col-lg-5 order-lg-2 mt-4">
                                <ul className="d-flex justify-content-around align-items-center">
                                    <li className="nav-item-center"> <a href="/">Inicio</a></li>
                                    <li className="nav-item-center"><a href="/Productos">Productos</a></li>
                                    <li className="nav-item-center"><a href="/Contacto">Contacto</a></li>
                                </ul>
                            </div>
                            <div className="col-8 order-2 col-lg-4 order-lg-3 ps-5 mt-4 d-flex justify-content-between align-items-center">
                                <ul className="d-flex justify-content-between align-items-center">
                                    <a href="/">
                                        <div className="d-flex flex-column align-items-center justify-content-center">
                                            <svg className="icon">
                                                <path d="M32.5 10H25V3.5C25 1.6 23.4 0 21.5 0h-18A3.5 3.5 0 0 0 0 3.5v10C0 15.4 1.6 17 3.5 17h2.9v3.5c0 .2.1.4.3.4l.2.1.3-.1 5.8-3.7v6.3c0 1.9 1.6 3.5 3.5 3.5h6.1l6.2 3.9.3.1.2-.1c.2-.1.3-.3.3-.4V27h2.9c1.9 0 3.5-1.6 3.5-3.5v-10c0-1.9-1.6-3.5-3.5-3.5zM7.4 19.6v-3.1c0-.3-.2-.5-.5-.5H3.5A2.5 2.5 0 0 1 1 13.5v-10C1 2.1 2.1 1 3.5 1h18C22.9 1 24 2.1 24 3.5v10c0 1.4-1.1 2.5-2.5 2.5h-8.3l-.3.1-5.5 3.5zM35 23.5c0 1.4-1.1 2.5-2.5 2.5h-3.4c-.3 0-.5.2-.5.5v3.1L23 26.1l-.2-.1h-6.3a2.5 2.5 0 0 1-2.5-2.5V17h7.5c1.9 0 3.5-1.6 3.5-3.5V11h7.5c1.4 0 2.5 1.1 2.5 2.5v10z"></path>
                                            </svg>
                                            <span className="nav-item-right">Ayuda</span>
                                        </div>
                                    </a>
                                    <a href="/">
                                        <div className="d-flex flex-column align-items-center justify-content-center">
                                            <svg className="icon">
                                                <path d="M15 16.6c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zm0-15.1c3.9 0 7 3.2 7 7s-3.1 7-7 7-7-3.2-7-7 3.1-7 7-7zM29.5 29c0 .3-.2.5-.5.5s-.5-.2-.5-.5c0-4.8-6.1-8.7-13.5-8.7S1.5 24.2 1.5 29c0 .3-.2.5-.5.5s-.5-.2-.5-.5c0-5.3 6.5-9.7 14.5-9.7s14.5 4.4 14.5 9.7z"></path>
                                            </svg>
                                            <span className="nav-item-right">Mi Cuenta</span>
                                        </div>
                                    </a>
                                    <a href="/">
                                        <div className="d-flex flex-column align-items-center justify-content-center">
                                            <svg className="icon">
                                                <path d="M31 17.6l3-13-.1-.4-.4-.2H6.8L6 .4C5.9.2 5.7 0 5.5 0h-5C.2 0 0 .2 0 .5s.2.5.5.5h4.6L10 23.6l.2.3c-.7.6-1.2 1.6-1.2 2.6 0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5c0-1-.4-1.9-1.1-2.5H25c-.7.6-1.1 1.5-1.1 2.5 0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5-1.5-3.5-3.4-3.5H10.9l-1.1-5h20.7c.2 0 .4-.2.5-.4zm-1 8.9c0 1.4-1.1 2.5-2.5 2.5S25 27.9 25 26.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5zm-15 0c0 1.4-1.1 2.5-2.5 2.5S10 27.9 10 26.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5zM9.6 17L7 5h25.9l-2.8 12H9.6z"></path>
                                            </svg>
                                            <span className="nav-item-right">Mi Carrito</span>
                                        </div>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;