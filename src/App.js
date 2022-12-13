import "./App.css";
import NavBar from "./App/components/nav/index";
import Mid from "./App/Mid";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Mid />
    </BrowserRouter>
  );
}

export default App;
