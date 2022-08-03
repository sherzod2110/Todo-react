// import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Main/Hero/Hero";
import Footer from "./components/Footer/Footer";

function App() {
  // const [count, setCount] = useState(0)


  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}

export default App;
