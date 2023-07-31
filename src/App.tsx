import './App.css'
import {Link, Route, Routes} from "react-router-dom";
import HelloPage from "./HelloPage.tsx";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/hello/:name" element={<HelloPage/>}/>
      </Routes>
  )
}

function Homepage() {
    const name = "Rene";
    return (
        <div>
            <h1>Homepage</h1>
            <Link to="/about">About</Link><br/>
            <Link to={"/hello/" + name}>Hello Rene</Link>
        </div>
    );
}

function AboutPage() {
    return (
        <h1>This is the page about the app</h1>
    );
}

export default App
