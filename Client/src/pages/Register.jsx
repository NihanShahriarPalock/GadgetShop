import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div>
      <div className='hero bg-base-200 min-h-screen'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'></div>
          <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
            <h1 className='text-2xl font-bold text-center py-4'>
              Register Here
            </h1>
            <form className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='email'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='password'
                  className='input input-bordered'
                  required
                />
                <label className='label'>
                  <Link to='/login' className='label-text-alt link link-hover '>
                    Already have an account?
                  </Link>
                </label>
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Confirm Password</span>
                </label>
                <input
                  type='password'
                  placeholder='confirm password'
                  className='input input-bordered'
                  required
                />
                <label className='label'>
                  <Link to='/login' className='label-text-alt link link-hover '>
                    Already have an account?
                  </Link>
                </label>
              </div>
              <div className='form-control mt-6'>
                <button className='btn btn-primary'>Register </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register