import {useContext} from "react";
import "./App.css";
import Nav from "./Components/NavBar/Nav"
import Login from "./Components/Context-API-2/Login";
import Home from "./Components/Context-API-2/Home";
import { AuthContext } from "./Components/Context-API-2/CustomProvider";

function App() {
  const { isloggedin } = useContext(AuthContext)
  return (
    <div className="App">
      <Nav />
      {
        isloggedin ? <Home /> : <Login />
      }
      {/*<Nav />
      <Login />*/}
    </div>
  );
}

export default App;
