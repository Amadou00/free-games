import React, { useState, useEffect } from 'react';

function Navbar() {
    return(
        <div className='w3-container w3-red nav-body'>
            <div className='w3-panel w3-grey w3-half nav-link'>
                <a>Accueil</a>
            </div>
            <div className='w3-panel w3-grey w3-half nav-link'>
                <a>Favoris</a>
            </div>
        </div>
    )
}

export default Navbar