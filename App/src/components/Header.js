import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

function Header() {
    const cart = useSelector((state) => state.cart.cart);
    const naviagte = useNavigate();
    const naviagteToCart = () => {
        naviagte("/cart")
    }
    return (

        <>

            <div className='header'>
                {/* shopping cart icon */}
                <ShoppingCartIcon style={{ color: "white", marginRight: 2, marginTop: 10 }} />



                {/*company name*/}
                <h4 className="headerText" style={{ marginRight: 2 }}> UpGrad E-Shop </h4>

                {/* Search Bar */}
                <div className='headerInputContainer'>
                    <input className='headerInput' type="text" placeholder="search" />
                    <SearchIcon style={{ color: "white", marginLeft: 4, marginTop: 10 }} />
                </div>

                <div>
                    <h4 className="headerText"> Home </h4>
                </div>

                <div onClick={naviagteToCart}>
                    <h4 style={{position: "relative", cursor: "pointer"}} className="headerText"> Added Product </h4>
                </div>

                <div>
                    <h4 className="headerText"> Logout </h4>
                </div>

            </div>
            {/* Bottom Header Part */}
            <div className="headerBottom">
                <MenuIcon/>
                <p> All </p>
                <p> Apparel </p>
                <p> Electronics </p>
                <p> Footwear </p>
                <p> Personal Care </p>

            </div>

            


        </>

    )
}

export default Header;