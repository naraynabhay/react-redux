import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item,itemIndex}) => {
   const dispatch =useDispatch
  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.success("item removed successfully")
  }
  return ( <div className="flex flex-col items-center p-4 justify-between ">
    <div className="flex flex-row justify-evenly gap-4">

      <div   className="h-[180px] w-[200px]">
        <img src={item.image} alt=""  className="h-full w-full "/>
      </div>

      <div>

      <div>
        <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
        <h1 className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description}</h1>
      </div>

      <div className="flex justify-evenly m-3">
        <div>
          <p>{item.price}</p>
        </div>

         <div onClick={removeFromCart}>
           <MdDelete/>
         </div>
      </div>

      

      </div>

    </div>
  </div>);
};

export default CartItem;
