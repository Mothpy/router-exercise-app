import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from "react-router-dom";
import NoMatch from "./NoMatch";
import UserProfile from "./UserProfile";
import BackButton from "./Buttons/BackButton";
import ForwardButton from "./Buttons/ForwardButton";


function Home() {
  return <p>Welcome Home. We've been waiting for you :) </p>;
}

function About() {
  return <p>Tell me... What's this all about?</p>;
}

function Wassup() {
  return <p>Wassuppppppp?!?!?!?! 🤪 </p>;
}

function App() {
  // user id:   data hold 
  const userId = [1,2,3,4,5];

  return (
    <Router>
      <div className="App">
      <nav>
      <h1>Welcome To My World !(=ↀωↀ=) Glad to have you ʘ̥ꀾʘ̥ </h1>
      <h2>ᶠᵉᵉᵈ ᵐᵉ /ᐠ-ⱉ-ᐟ\ﾉ </h2>
      <BackButton />
      <ForwardButton />
      </nav>
      
      <br /> 
      <Link to="/"> Home </Link>
      <br />
      <Link to="/about"> About </Link>
      <br />
      <Link to="/wassup"> Wassup </Link>
      <br />
      {
        userId.map((id) => (
          <div key={id}>
            <Link to={`/user/${id}`}>User {id}</Link>
        </div>
        ))}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/wassup" element={<Wassup />} />
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;