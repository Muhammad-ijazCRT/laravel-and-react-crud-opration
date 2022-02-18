import React from 'react'
import { Link, Outlet  } from 'react-router-dom'

const Products = () => {
  return (
    <>
    <div>Products</div>

    <nav>
        <Link to='features'>feactures</Link> <br /><br />
        <Link to='Cate'>cate</Link><br />
        <Link to='sub'>sub</Link><br />
    </nav>
        <h2>before</h2>
    <Outlet />
    
    </>

  )
}

export default Products