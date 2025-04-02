import React, { useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useAppSelector } from "./hooks/useAppSelector";
import { authentication } from "./firebase";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { login, logout } from "./features/useSlice";

function App() {
  // ログイン情報取得
  const userState = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // ログイン情報取得 (認証状態が変わったら情報を取得する)
    authentication.onAuthStateChanged((user) => {
      if(user){
        dispatch(login({
          userId: user.uid,
          userIcon: user.photoURL,
          userEmail: user.email,
          displayName: user.displayName,
        }));
      } else {
        dispatch(logout());
      }
      console.log(userState);
    });
  }, [dispatch]);

  return (
    <div className="App">
      {userState ? (
        <div>
          <Home />
        </div>
      ) : (
        <div><Login /></div>
      )}
    </div>
  );
}

export default App;
