import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AddToCart from './AddToCart'

const ProductItem = ({product}) => {
  return (
    <div className="card">
      <div href={`/product/${product.id}`}>
        <Image
        src={product.image}
          width={400}
          height={400}
          alt={product.name}
          className="rounded shadow object-cover h-96 w-full"
        ></Image>
      </div>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.id}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p>${product.price}</p>
        <AddToCart showQty={false} product={product} increasePerClick={true} redirect={false} />

        
      </div>
    </div>
  );
}

export default ProductItem