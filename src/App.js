import { Outlet } from "react-router-dom";

//Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
}

export default App;
