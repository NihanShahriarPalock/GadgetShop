import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import GoogleLogin from "../components/login-registration/GoogleLogin";

const Login = () => {
  const { Login } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    Login(data.email, data.password);
    navigate("/");
  };
  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        {/* <div className='text-center lg:text-left'></div> */}
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
          <h1 className='text-2xl font-bold text-center py-4'>Login Now</h1>
          <form className='card-body' onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='email'
                className='input input-bordered'
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className='text-red-600'>Email is required</p>
              )}
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                placeholder='password'
                className='input input-bordered'
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password?.type === "required" && (
                <p className='text-red-600'>Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className='text-red-600'>Password is short</p>
              )}
            </div>
            <div className='form-control mt-6'>
              <button type='submit' className='btn btn-primary'>
                Login{" "}
              </button>
            </div>
            <GoogleLogin></GoogleLogin>
            <p className="my-4">New Here  
              <Link to='/register' className="text-primary"> Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
