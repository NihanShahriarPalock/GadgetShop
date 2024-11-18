/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Loading from "../../pages/Loading";
import useUserData from "../../hooks/useUserData";


const SellerRoute = ({children}) => {
   const { user, loading } = useAuth();
    const location = useLocation();
    const userData = useUserData();

   if (loading || !userData.role) {
     return <Loading></Loading>;
   }
   if (user && userData.role === "seller") {
     return children;
   }

   return <Navigate to='/' state={{ from: location }} replace></Navigate>;
}

export default SellerRoute