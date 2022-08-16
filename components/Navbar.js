import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiShoppingBagLine } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import Link from "next/link";
const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const [cartModalStatus, setCartModalStatus] = useState(false);
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={"/"}>
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">E-commerce</span>
          </a>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/tshirts"}>
            <a className="mr-5 hover:text-gray-900">Tshirts</a>
          </Link>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
        <Link href="/login">
          <a>Login</a>
        </Link>
        <button
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          onClick={() => {
            setCartModalStatus(!cartModalStatus);
          }}
        >
          Cart
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
        {cartModalStatus && (
          <div className="sidebar absolute top-0 right-0 bg-violet-500 w-64 px-4 pt-3  text-white">
            <div className="flex justify-between items-center mb-3">
              <h5 className="font-bold">Cart</h5>
              <button
                onClick={() => {
                  setCartModalStatus(!cartModalStatus);
                }}
              >
                <MdOutlineCancel />
              </button>
            </div>
            {Object.keys(cart).length === 0 && (
              <div className="my-3">No Items in your cart!!</div>
            )}
            <ol className="pl-3">
              {Object.keys(cart).map((item) => {
                return (
                  <li key={item} className="text-sm flex align-middle mb-2">
                    <p className="text-sm">
                      {cart[item].name}{" "}
                      <span className="text-xs capitalize">
                        ({cart[item].variant}/{cart[item].size})
                      </span>
                    </p>
                    <span className="px-2">x</span>
                    <span>{cart[item].qty}</span>
                  </li>
                );
              })}
            </ol>
            <div>{subTotal}</div>
            <div className="flex justify-evenly py-3 border-t-2 border-white mt-3">
              <button
                type="button"
                className="text-xs text-purple-800 bg-white py-1 px-3 rounded flex items-center justify-between"
                onClick={clearCart}
              >
                <AiOutlineShoppingCart />
                Clear Cart
              </button>
              <Link href={"/checkout"}>
                <button
                  type="button"
                  className="text-xs text-purple-800 bg-white py-1 px-3 rounded flex items-center justify-between"
                >
                  <RiShoppingBagLine />
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
