import React from 'react'


const Navbar = () => {
    return(
        <nav class="nav-wrapper accent-color">
            <div class="nav-container">

                <h1>RA Design's Shop</h1>

                <ul class="">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Shop</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Shopping Cart</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Checkout</a>
                    </li>
                   
                </ul>
            </div>
        </nav>
        
    )
}

export default Navbar;

