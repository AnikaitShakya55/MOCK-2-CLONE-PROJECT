import React from 'react'
import { CiHome } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { FaSearchengin } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import styles from './NavBar.module.css';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';




const NavBar = () => {
  return (
    <div className={styles.navContainer}>

        <nav>
            <ul className={styles.navul}>
                <li className={styles.navLi}><NavLink to='/' ><CiHome/></NavLink></li>
                <li className={styles.navLi}><NavLink to='/'><IoHome/></NavLink></li>
                <li className={styles.navLi}><NavLink to='#'><FaSearchengin/></NavLink></li>
                <li className={styles.navLi}><NavLink to='#'><MdAccountCircle/></NavLink></li>
            </ul>
        </nav>
      
    </div>
  )
}

export default NavBar
