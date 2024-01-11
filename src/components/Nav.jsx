import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
  <nav>
        <div className='logoblock'>
            <img src="https://iconape.com/wp-content/png_logo_vector/ecommerce.png" alt="" />
            <h1 className='tracking-in-expand'>JUSTSTORE</h1>
        </div>
        <div className='menublock'>
            <ol>
                <li>
                    <Link to={"/product"}>PRODUCT</Link>
                </li>
                <li><Link to={"/"}>CART</Link></li>
            </ol>
        </div>
  </nav>
  )
}

export default Nav
