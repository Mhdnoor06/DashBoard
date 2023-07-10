import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import Login from './Login';
import Register from './Register';
import { auth } from '../../fire';

function Authentication({ children }) {
  const [user, setUser] = useState(null);
  const [authState, setAuthState] = useState(null);

  useEffect(() => {
    const unSubscribeAuth = onAuthStateChanged(
      auth,
      async (authenticatedUser) => {
        if (authenticatedUser) {
          setUser(authenticatedUser.email);
          setAuthState('home');
        } else {
          setUser(null);
          setAuthState('login');
        }
      },
    );

    return unSubscribeAuth;
  }, []);

  if (authState === null)
    return <div className="font-bold text-center text-5xl">loading...</div>;
  if (authState === 'login')
    return <Login setAuthState={setAuthState} setUser={setUser} />;
  if (authState === 'register')
    return <Register setAuthState={setAuthState} setUser={setUser} />;
  if (user) return children;

  return null;
}

export default Authentication;
