import React from 'react'


const Navbar = () => {
    return(
        <nav class="nav-wrapper">
            <div class="nav-container">
                <img class="logo" />

                <ul class="nav-links">
                    <li>Home</li>
                    <li>My Cart</li>
                    <li>Checkout</li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar;