import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
     <nav>
            <a href="index.html" className="logo">Xplore
                <i className="fab fa-staylinked"></i>kill
            </a>
            <div className="nav-links" id="navLinks">
                {/* <i className="fa fa-times" onclick="hideMenu()"></i> */}
                <i className="fa fa-times" ></i>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/Courses">Course</Link></li>
                    <li><Link href="/Blogs">Blog</Link></li>
                    <li><Link href="/About">About</Link></li>
                    <li><Link href="/Contact">Contact</Link></li>
                </ul>
            </div>
            {/* <i className="fa fa-bars" onclick="showMenu()"></i> */}
            <i className="fa fa-bars" ></i>
        </nav>
    
    </>
  )
}

export default Navbar