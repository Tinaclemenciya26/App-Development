import React, { useState , useEffect } from 'react';
import '../Assets/CSS/Login.css'
import logo from '../Assets/images/mountain and bird/bird-white.png';
import { useNavigate } from 'react-router-dom';
import {login} from "../Pages/Redux/UserSlice"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectUser } from './Redux/UserSlice';

function Login() {

  // Regex
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  //dispatch
  const Dispatch = useDispatch();
  const user = useSelector(selectUser)

  // usestate 
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [emailValid,setEmailvalid] = useState(true)
  const [passwordValid,setPasswordvalid] = useState(true)
  
  // to Navigate
  let Nav = useNavigate();

  const handleOnEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleOnPassword = (e) => {
    setPassword(e.target.value)
  }
  useEffect(() => {
    if (user) {
      Nav("/dash");
    } else {
      console.log("Not logged in");
    }
  }, [user]);

  const handleOnSubmit = (e) => {
    e.preventDefault()
    checkEmail()
    checkPassword()
    if(emailValid ===true && passwordValid === true && email !== "" && password !== ""){
      Dispatch(
        login({
        email:email,
        password:password,
        loggedIn:true
      })
      )
      console.log("sign in done ")
    }
  }
  const checkEmail = () => {
    setEmailvalid(emailRegex.test(email))
  }
  const checkPassword = () => {
    setPasswordvalid(passwordRegex.test(password))
  }

  return (
    <>
  
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" id='login-root'>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-40 w-auto"
            src={logo}
            alt="spam-shield"
          />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleOnSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleOnEmail}
                 
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {!emailValid?<span style={{ color: 'red' }}>Invalid Email</span>:""}
              
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password"  className="block text-sm font-medium leading-6 text-gray-900 ">
                  Password
                </label>

                {/* forget password */}

                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div> */}

              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={handleOnPassword}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {!passwordValid?<span style={{ color: 'red' }}>Invalid Password</span>:""}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-sm text-black-500">
            Not yet Registered?{' '}
            <a href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
export default Login;
