import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { AuthContext } from "./AuthContext";
import { UserDataContext } from "./UserDataContext";
import RequireAuth from "./components/RequireAuth";
import useLocalStorage from "use-local-storage";
import Profile from "./pages/Profile";



export default function App() {
  const [token, setToken] = useLocalStorage("token", null);
  const [userData, setUserData] = useLocalStorage("userData", null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <UserDataContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Signup />} path="/signup" />
            <Route
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
              path="/dashboard"
            />
            <Route
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
              path="/profile"
            />
          </Routes>
        </BrowserRouter>
    </UserDataContext.Provider >
    </AuthContext.Provider>
  );
}
