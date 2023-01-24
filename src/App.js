//React-Router-Dom
import { Outlet } from "react-router-dom";

//React-Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Outlet />
      <Navbar />
      <ToastContainer />
    </>
  );
}

export default App;
