import React from 'react'
import { CiHome } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { FaSearchengin } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import './NavBar.css'




const NavBar = () => {
  return (
    <div>

        <nav>
            <ul>
                <li><a href='#' ><CiHome/></a></li>
                <li><a href='#'><IoHome/></a></li>
                <li><a href='#'><FaSearchengin/></a></li>
                <li><a href='#'><MdAccountCircle/></a></li>
            </ul>
        </nav>
      
    </div>
  )
}

export default NavBar
