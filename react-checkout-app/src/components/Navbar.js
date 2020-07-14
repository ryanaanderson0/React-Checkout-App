import React from 'react'

const Navbar = () => {
    return(
        <nav class="nav-wrapper">
            <div class="nav-container">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Shop</a>
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

