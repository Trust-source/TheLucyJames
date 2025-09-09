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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for when everything is loaded
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      // If already loaded, hide splash immediately
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Cleanup
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) {
    return <SplashScreen />;
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
