import React from "react"
import CarWidget, {} from '../CarWidget/CarWidget.jsx';
import ItemListContainer from "../ItemListContainer/ItemListContainer.jsx";
import './NavBar.css'

const NavBar = () => {
    return(
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0/css/all.min.css"></link>
        <div className="navBar">
            <h1 className="title">Moon Make Up</h1>
            <nav className="main-nav">
                <ul className="listNav">
                    <li className="menu__item"><a href="">INICIO</a></li>
                    <li className="menu__item"><a href="">TIENDA</a></li>
                    <li className="menu__item"><a href="">CARACTERISTICAS</a></li>
                    <li className="menu__item"><a href="">NOSOTRAS</a></li>
                    <li className="menu__item"><a href="">CONTACTO</a></li>
                </ul>
            </nav>
        </div>
        <div className="main-header__container">
            <CarWidget/><span id="cuenta-carrito"> 0</span>
        </div>

        <ItemListContainer greeting={"Bienvenido mi e-commerce"}/>
        </>
    )
}

export default NavBar;