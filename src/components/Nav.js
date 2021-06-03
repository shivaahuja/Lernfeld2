import React from 'react'
import {Link} from 'react-router-dom'

function Nav () {

    return(
            <nav>
                <h3>ScooTeq GmbH</h3>
                <ul className='nav-links'>
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={'/Berechnung'}><li>Berechnung</li></Link>
                </ul>
            </nav>
        )   
}

export default Nav;