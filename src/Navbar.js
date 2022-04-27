import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {

    const [click,setClick]=useState(false);
    const handleClick = () =>setClick(!click);
    const [color,setColor] = useState(false);

    const changeColor = async() =>{
        if(window.scrollY >= 100)setColor(true);
        else setColor(false);
    }
    useEffect(async()=>{
        changeColor();
      },[]);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
        <Link to='/'>
            <h1>Job Portal</h1>
        </Link>
        <ul className={click? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/companies'>Companies</Link>
            </li>
            <li>
                <Link to='/trainer'>Trainer</Link>
            </li>
        </ul>

        <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={20} style={{color:'white'}}/>):( <FaBars size={20} style={{color:'white'}}/>)
          }
        </div>
    </div>
  )
}

export default Navbar


