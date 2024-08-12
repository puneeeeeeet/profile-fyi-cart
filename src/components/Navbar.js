import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header>
      <nav className=" flex justify-between items-center h-20 px-4 shadow-md bg-gray-800 text-white">
        <Link href="/" className="text-3xl font-bold">
          Profile FYI Cart
        </Link>
        <div>
          <span className="cart-badge">0</span>
          <Link href="/cart">Cart</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar