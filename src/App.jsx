import React, { useContext, useEffect } from "react";
import "./App.css";
import AppRouter from "./routes/AppRouter";
import { Type } from "./Utility/action.type";
import { auth } from "./Utility/firebase";
import { DataContext } from "./components/DataProvider/DataProvider";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
