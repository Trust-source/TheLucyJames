import { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AboutMe from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Blog from "./components/Blogs";
import SplashScreen from "./components/Splash";

function App() {
  const [menu, setMenu] = useState(false);
  const [loading, setLoading] = useState(true); // state to track splash

  useEffect(() => {
    // Simulate loading time (e.g., fetching data, assets, etc.)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // splash screen shows for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />; // show splash screen while loading
  }

  return (
    <>
      <Navbar menu={menu} setMenu={setMenu} />
      <Sidebar menu={menu} setMenu={setMenu} />
      <div>
        <Homepage />
        <AboutMe />
        <Experience />
        <Blog />
        <Contact />
      </div>
    </>
  );
}

export default App;
