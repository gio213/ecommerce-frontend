import "./App.css";
import { SignUp } from "./components/pages/sign-up/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <main className="w-full h-screen p-4">
      <SignUp />
    </main>
  );
}

export default App;
