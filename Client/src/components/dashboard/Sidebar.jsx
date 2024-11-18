import { NavLink} from "react-router-dom";
import useUserData from "../../hooks/useUserData";
import { MdOutlineInventory2 } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useAuth } from "../../hooks/useAuth";
const sellerRoutes = [
  {
    id: 1,
    route: "/dashboard/my-products",
    title: "My Products",
    icon: <MdOutlineInventory2 />,
  },
  {
    id: 2,
    route: "/dashboard/add-products",
    title: "Add Products",
    icon: <IoMdAddCircleOutline />,
  },
];

const Sidebar = () => {
  const userData = useUserData();
  const { Logout } = useAuth();
  return (
    <div className='bg-gray-200 border-r-2 border-black min-h-screen px-8 py-16'>
      <h1 className='font-bold text-2xl mb-8'>Gadget Shop</h1>
      <ul className='flex flex-col gap-2'>
        <li className='btn'>
          <NavLink to='/dashboard/overview'>Overview</NavLink>
        </li>
        {userData.role === "seller" && sellerRoutes.map((route)=> (
           <li key={route.id} className="p-2 border border-black rounded-md">
             <NavLink to={route.route}><>{route.icon}</>
               <p>{route.title}</p></NavLink>
           </li>
        ))}
        <li>
          <NavLink to='/dashboard'>Home</NavLink>
        </li>
      

        <li className='btn' onClick={()=>Logout()}>
          <button>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
