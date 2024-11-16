import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth"
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
    const { GoogleLogin } = useAuth;
    const navigate = useNavigate()
    const handleGoogleLogin = ()=> {
        GoogleLogin();
        navigate("/")
    }
  return (
    <div>
      <div className='divider'>OR</div>
      <button onClick={handleGoogleLogin} className="btn btn-primary btn-outline">
        <FcGoogle />
      </button>
    </div>
  );
}

export default GoogleLogin