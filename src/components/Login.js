import React, { useState } from 'react';
import AppleIcon from '../assets/AppleIcon';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

const Login = ({ onLogin }) => {
  const [user, setUser] = useState({
    email: 'demo@listed.com',
    password: '123456',
  });

  const handleLoginChange = e => {
    setUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    if (user.email && user.password) {
      onLogin(user);
    } else {
      alert('Enter Email and Password');
    }
  };

  return (
    <div className='w-screen h-screen text-center bg-red-500 flex'>
      <div className='w-[36.75rem] font-montserrat bg-gray-900 text-white text-7xl font-bold flex justify-center items-center'>
        Board.
      </div>
      <div className='w-full bg-gray-100 flex justify-center items-center'>
        <div className='flex flex-col items-start'>
          <p className='font-bold text-4xl text-black font-montserrat mb-[0.31rem]'>
            Sign In
          </p>
          <p className='font-normal text-base text-black font-lato mb-[1.63rem]'>
            Sign in to your account
          </p>
          <div className='flex w-[24.062rem] justify-between mb-[1.56rem]'>
            <GoogleOAuthProvider clientId='911150504767-1pktsp9lb2u7d1e2sljpjlecjc94jjqn.apps.googleusercontent.com'>
              <GoogleLogin
                onSuccess={credentialResponse => {
                  var decoded = jwt_decode(credentialResponse.credential);
                  onLogin(decoded || user);
                  console.log('decoded cred res::>', decoded);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </GoogleOAuthProvider>

            <button className='flex items-center gap-2 justify-center bg-white text-gray-400 rounded-xl px-[1.15rem] py-2 w-[11.25rem]'>
              <AppleIcon />
              <span className='font-montserrat text-xs'>
                Sign in with Apple
              </span>
            </button>
          </div>

          <form
            onSubmit={handleLoginSubmit}
            className='flex flex-col items-start text-base font-lato w-full p-[1.88rem] bg-white rounded-[1.25rem] mb-5'
          >
            <label htmlFor='email' className='mb-[0.63rem]'>
              Email address
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='w-full bg-[#f5f5f5] pt-[0.63rem] pb-[0.65rem] rounded-[0.625rem] mb-5 outline-none px-4'
              onChange={handleLoginChange}
              defaultValue={user.email}
            />

            <label htmlFor='password' className='mb-[0.63rem]'>
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              className='w-full bg-[#f5f5f5] pt-[0.63rem] pb-[0.65rem] rounded-[0.625rem] mb-5 outline-none px-4'
              onChange={handleLoginChange}
              defaultValue={user.password}
            />

            <button className='text-[#346BD4] mb-5' type='button'>
              Forgot Password?
            </button>

            <button
              className='bg-black text-white font-bold py-2 px-4 rounded-[0.625rem] w-full font-montserrat'
              type='submit'
            >
              Sign In
            </button>
          </form>
          <p className='font-lato text-base font-normal self-center'>
            Don't have an account?{' '}
            <span className='text-[#346BD4]'>Register here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
