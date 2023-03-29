import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Title from '../Title/Title'
import Subtitle from '../Subtitle/Subtitle'

const NavBar = () => {
    const envioGratis = '$40.000'
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Title greeting = "Deco"/>
            <Subtitle greeting = "Estudio"/>
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarText">
            <ul className="nav">
                <li className="nav-item">
                    <ItemListContainer greeting = "Home"/>
                </li>
                <li className="nav-item">
                    <ItemListContainer greeting = "Category"/>
                </li>
                <li className="nav-item">
                    <ItemListContainer greeting = "SALE"/>
                </li>
                <li className="nav-item">
                    <ItemListContainer greeting = "NEW IN"/>
                </li>
                <li className="nav-item ">
                    <CartWidget/>
                </li>
            </ul>
        
        </div>
    </div>
  </nav>
  )
}

export default NavBar