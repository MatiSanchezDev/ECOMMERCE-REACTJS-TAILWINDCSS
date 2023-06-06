import { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsCartCheck, BsFacebook, BsSearchHeart } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full h-16 flex justify-between items-center pt-6 p-3 pr-6 xl:w-[1479px] xl:pl-9 xl:pr-9">
          <img
            src="./MattlogoW2.png"
            className="w-20 pt-1 pl-2 p-0 xl:w-[120px]"
          />
          <div
            className={
              nav
                ? "bg-white absolute z-10 p-5 pt-6 pb-6 h-full w-[300px] left-0 top-0 flex flex-col ease-in-out duration-500"
                : "fixed left-[-100%]"
            }
          >
            <div className="bg-white absolute p-3 pt-6 pb-6 h-full w-[300px] left-0 top-0 flex flex-col ease-in-out duration-500">
              <div className="flex items-center justify-between">
                <img
                  src="./mattlogoB2.png"
                  className="w-20 pl-3 xl:w-[120px]"
                />
                <button onClick={handleNav}>
                  <AiOutlineClose className="text-2xl cursor-pointer " />
                </button>
              </div>
              <ul className="text-xl font-semibold pl-3 pt-4 cursor-pointer">
                <li className="hover:text-purple-600">Home</li>
                <li className="hover:text-purple-600">Productos</li>
                <li className="hover:text-purple-600">Formas de pago</li>
                <li className="hover:text-purple-600">Envios</li>
                <li className="hover:text-purple-600">Contactos</li>
              </ul>
              <div className="flex font-bold pl-3 pt-4 gap-5 cursor-pointer">
                <div className="flex flex-col items-center justify-center group">
                  <AiOutlineInstagram className="text-2xl group-hover:text-purple-600" />
                  <p className="group-hover:text-purple-600">Instagram</p>
                </div>
                <div className="flex flex-col items-center justify-center group">
                  <AiOutlineWhatsApp className="text-2xl group-hover:text-purple-600" />
                  <p className="group-hover:text-purple-600">Facebook</p>
                </div>
                <div className="flex flex-col items-center justify-center group">
                  <BsCartCheck className="text-2xl group-hover:text-purple-600" />
                  <p className="group-hover:text-purple-600">Carrito</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center gap-8">
            <BsSearchHeart className="text-xl text-white" />
            <BsCartCheck className="text-xl text-white" />
            <button onClick={handleNav}>
              {nav ? (
                <AiOutlineClose className="text-2xl cursor-pointer text-white" />
              ) : (
                <FaBars className="text-2xl cursor-pointer text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
