
export default function CartSideBar ()  {
  
  const {loading, cartItems} = useSelector((state)=> state.cart)
  return (
    <div className='fixed top-0 right-0 w-32 h-full shadow-lg border-l border-l-gray-700 overflow-scroll'>
        {loading ?  (
            <div className='py-5 px-2'>Loading...
              </div>
          ):cartItems.length ===0 ? (
            <div></div>
          ):(
            <></>
          )
        }
    </div>
  )
}
