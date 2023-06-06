import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../Store/slices/stickeriaSlice";

export const useStickeria = () => {
  const dispatch = useDispatch();
  const { cart, product } = useSelector((state) => state.stickeria);

  const onAddCart = (action) => {
    dispatch(addCart(action));
  };

  return {
    cart,
    product,
    onAddCart,
  };
};
