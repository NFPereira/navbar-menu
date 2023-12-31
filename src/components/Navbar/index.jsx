import React from 'react'
//import css
import styles from './styles.module.css'

//import react-router-dom
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div className={styles.navbar}>
            <div className={styles.brand}><Link to="/">Navbar</Link></div>
            <div className={styles.menu}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/servicos">Serviços</Link></li>
                    <li><Link to="/contatos">Contatos</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar