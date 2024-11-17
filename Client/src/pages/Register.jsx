// import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import GoogleLogin from "../components/login-registration/GoogleLogin";
import axios from "axios";
import Swal from "sweetalert2";
const Register = () => {
  const { CreateUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email
    const role = data.role 
    const status = role == "buyer" ? "approved" : "pending"
    const wishlist = []
    const userData = { email, role, status, wishlist }
    
    CreateUser(data.email, data.password).then(() => {
      axios.post("http://localhost:4000/users", userData).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Account Created Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      })
    })
    //
    console.log(userData);
    
  };

  return (
    <div>
      <div className='hero bg-base-200 min-h-screen'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'></div>
          <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
            <h1 className='text-2xl font-bold text-center py-4'>
              Register Here
            </h1>
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
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Confirm Password</span>
                </label>
                <input
                  type='password'
                  placeholder='confirm password'
                  className='input input-bordered'
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => {
                      if (watch("password") != value) {
                        return "Your passwords do not match";
                      }
                    },
                  })}
                />
                {errors.confirmPassword && (
                  <p className='text-red-500'>Both passwords must match</p>
                )}
              </div>

              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Select Role</span>
                </label>
                <select
                  className='select select-bordered w-full max-w-xs'
                  {...register("role", { required: true })}>
                  <option value='buyer'>Buyer</option>
                  <option value='seller'>Seller</option>
                </select>
                {errors.role && (
                  <p className='text-red-600'>You must select a role</p>
                )}
              </div>
              <div className='form-control mt-6'>
                <button type='submit' className='btn btn-primary'>
                  Register{" "}
                </button>
              </div>
            </form>
            <div>
              <GoogleLogin></GoogleLogin>
            </div>
            <label className='label'>
              <Link to='/login' className='text-center '>
                Already have an account?
              </Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
