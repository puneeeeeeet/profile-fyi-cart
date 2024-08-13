"use client";
import { useEffect } from "react";
import CartSideBar from "./CartSideBar";
import Navbar from "./Navbar";
import { hideLoading } from "@/redux/slices/CartSlices";
import { useDispatch } from "react-redux";

export default function App({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideLoading());
  }, [dispatch]);

  return (
    <div>
      <div className="mr-32">
        <Navbar />
        <main className="p-4">{children}</main>
      </div>
      <CartSideBar />
    </div>
  );
}
