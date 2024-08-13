import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const {loading, cartItems} = useSelector((state)=> state.cart)
  return (
    <header>
      <nav className=" flex justify-between items-center h-20 px-4 shadow-md bg-gray-800 text-white">
        <Link href="/" className="text-3xl font-bold">
          Profile FYI Cart
        </Link>
        <div>
          <span className="cart-badge">
              {loading ? '': cartItems.reduce((a,c)=> a + c.qty,0)}
          </span>
          <Link href="/cart">Cart </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar