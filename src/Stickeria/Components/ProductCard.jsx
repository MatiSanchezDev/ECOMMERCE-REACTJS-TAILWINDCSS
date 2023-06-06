import { useStickeria } from "../../Hooks/useStickeria";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";

export const ProductCard = () => {
  const [like, setLike] = useState(true);
  const { product, onAddCart } = useStickeria();

  return (
    <>
      <div className="flex justify-center">
        <div className="flex gap-3 justify-center flex-wrap p-2 pt-3 xl:w-[1479px] ">
          {product.map((productos) => (
            <div
              key={productos.id}
              className="w-[300px] h-auto m-2 pt-2 p-4 bg-white/10 filter backdrop-blur-sm box-border rounded-xl shadow-2xl shadow-pink-600"
            >
              <h1 className="text-2xl p-3 text-white font-bold ">
                {productos.title}
              </h1>
              <div className="flex m-0 p-0 justify-center w-[250px] h-[250px] overflow-hidden">
                <img
                  className="object-cover w-[900px] h-auto ml-4 p-0"
                  src={`../${productos.title}.jpg`}
                />
              </div>
              <div className="flex text-center justify-between pb-2 pr-1 pl-1">
                <span className=" pl-1 pt-5 pb-2 text-3xl text-white font-bold">
                  ${productos.price}
                </span>
                <div className="flex items-center justify-between gap-2 pt-5 pb-2">
                  <button
                    className="flex items-center justify-between p-1 pr-4 pl-3 w-20 gap-1 rounded-lg border-2 border-slate-100 text-white"
                    onClick={() => onAddCart(productos)}
                  >
                    Add
                    <BsCartPlus />
                  </button>
                  <button onClick={() => setLike(!like)}>
                    {like ? (
                      <AiOutlineHeart className="text-3xl text-white cursor-pointer" />
                    ) : (
                      <AiFillHeart className="text-3xl cursor-pointer text-red-500" />
                    )}
                  </button>
                </div>
              </div>
              <p className="p-0 pb-2 pl-1 text-white text-lg">
                {productos.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
