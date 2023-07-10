import * as React from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../fire';
import {
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from 'firebase/auth';

function Login({ setAuthState, setUser }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [forgotPasswordStatus, setForgotPasswordStatus] = React.useState('');
  const [showForgotPassword, setShowForgotPassword] = React.useState(false);

  const toggleForgotPassword = () => {
    setShowForgotPassword(!showForgotPassword);
  };

  const handleLogin = () => {
    if (email !== null && password !== null) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setUser(email);
          setAuthState('home');
        })
        .catch((err) => alert(err));
    }
  };

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleAuthProvider)
      .then(() => {
        // Sign in successful
        alert('Sign in successful');
      })
      .catch((error) => {
        if (error.code === 'auth/popup-closed-by-user') {
          // Handle the error when the user closes the popup
          alert('Google sign-in popup closed by the user');
        } else {
          // Handle other errors
          console.error('Error signing in with Google:', error);
        }
      });
  }

  const handleForgotPassword = () => {
    if (email !== '') {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          setForgotPasswordStatus('success');
        })
        .catch((error) => {
          setForgotPasswordStatus('error');
          console.error('Error sending password reset email:', error);
        });
    } else {
      setForgotPasswordStatus('empty');
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="hidden relative w-2/5 h-full lg:flex items-center justify-center bg-black">
        <h1 className="text-white text-8xl font-bold">Board.</h1>
      </div>
      <div className="w-full flex items-center justify-center lg:w-3/5">
        <div className=" w-11/12 max-w-[700px] px-10 py-20  ">
          <h1 className="text-4xl font-bold">Sign in</h1>
          <p className="font-medium text-lg  mt-4">Sign in to your account</p>
          <button
            className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform p-4  rounded-3xl text-gray-400 font-semibold text-md  border-2 border-gray-100 bg-white mt-4 "
            onClick={googleSignIn}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z"
                fill="#EA4335"
              />
              <path
                d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z"
                fill="#34A853"
              />
              <path
                d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z"
                fill="#4A90E2"
              />
              <path
                d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z"
                fill="#FBBC05"
              />
            </svg>
            Sign in with Google
          </button>
          <div className="mt-8 bg-white p-8 rounded-3xl ">
            <div className="flex flex-col">
              <label className="text-lg font-medium">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-[#F5F5F5]"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-lg font-medium">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-[#F5F5F5]"
                placeholder="Enter your password"
                type={'password'}
              />
            </div>
            <div className="mt-8 flex justify-between items-center">
              <button
                className="font-medium text-base text-sky-500"
                onClick={handleForgotPassword}
              >
                Forgot password?
              </button>
            </div>
            {forgotPasswordStatus === 'success' && (
              <p className="text-green-500 mt-2">
                Password reset email sent successfully.
              </p>
            )}
            {forgotPasswordStatus === 'error' && (
              <p className="text-red-500 mt-2">
                Error sending password reset email. Please try again.
              </p>
            )}
            {forgotPasswordStatus === 'empty' && (
              <p className="text-red-500 mt-2">Please enter your email.</p>
            )}

            <div className="mt-8 flex flex-col gap-y-4">
              <button
                onClick={handleLogin}
                className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-black rounded-xl text-white font-bold text-lg"
              >
                Sign in
              </button>
            </div>
            <div className="mt-8 flex justify-center items-center">
              <p className="font-medium text-base">Don’t have an account?</p>
              <button
                onClick={() => setAuthState('register')}
                className="ml-2 font-medium text-base text-sky-500"
              >
                Register here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;