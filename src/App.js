import Body from "./components/Body";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Browse from "./components/Browse";
import Login from "./components/Login";
import { Provider, useDispatch } from "react-redux";
import appStore from "./utils/appStore";
import { auth } from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./utils/userSlice";
import { useEffect } from "react";

function App() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/browse",
  //     element: <Browse />,
  //   },
  // ]);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/auth.user
  //       const { uid, displayName, email } = user;
  //       dispatch(
  //         addUser({
  //           uid: uid,
  //           displayName: displayName,
  //           email: email,
  //         })
  //       );
  //       navigate("/browse");
  //     } else {
  //       dispatch(removeUser());
  //       navigate("/");
  //     }
  //   });
  // }, []);

  return (
    <>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </>
  );
}

export default App;
