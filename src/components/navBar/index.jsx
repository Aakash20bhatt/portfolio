import React, {useState} from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from 'react-router-dom';
import './styles.scss';

const data = [
    {
        label: 'HOME',
        to: '/'
    },
    {
        label: 'ABOUT ME',
        to: '/about'
    },
    {
        label: 'SKILLS',
        to: '/skill'
    },
    {
        label: 'RESUME',
        to: '/resume'
    },
    {
        label: 'PORTFOLIO',
        to: '/portfolio'
    },
    {
        label: 'CONTACT ME',
        to: '/contact'
    },
]


const Navbar = ()=>{

    const [toggle , settoggle] = useState(false);

    const handleToggleIcon = ()=>{
        settoggle(!toggle);
    }

    return(
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to={'/'} className="navbar__container__logo">
                        <FaReact size={30}/>
                    </Link>
                </div>
                <ul className={`navbar__container__menu ${toggle ? 'active': ''}`}>
                    {
                        data.map((item,index)=>{
                            return <li key={index} className="navbar__container__menu__item">
                                <Link to={item.to} className="navbar__container__menu__item__links">
                                    {item.label}
                                </Link>
                            </li>
                        })
                    }
                </ul>

                <div className="nav-icon" onClick={handleToggleIcon}>
                    {
                        toggle?<HiX size={30}/>:<FaBars size={30}/>
                    }
                </div>
            </nav>
        </div>
    );
}

export default Navbar;