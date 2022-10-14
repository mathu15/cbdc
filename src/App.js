import "./App.css";

import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Home from "./containers/Home/Home";

import { BrowserRouter as Router, Route } from "react-router-dom";
import CentralBank from "./containers/CentralBank/CentralBank";

function App() {
  return <Home />;
}

export default App;
