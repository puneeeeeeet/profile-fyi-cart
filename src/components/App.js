'use client'
import CartSideBar from "./CartSideBar"
import Navbar from "./Navbar"

export default function App({children}){
    return(
        <div>
            <div className="mr-32">
                <Navbar />
                <main className="p-4">{children}</main>
            </div>
            <CartSideBar />
        </div>
    )
}
