import { useState } from "react";
import mikuData from "./mikuData.js";
import Artist from "./components/Artist.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";


export default function App() {
  const [showGrid, setShowGrid] = useState(false);

  const toggleGrid = () => setShowGrid((prev) => !prev);

  return (
    <>
      <Header toggleGrid={toggleGrid} showGrid={showGrid} />
      {mikuData.map((artist) => (
        <Artist
          key={artist.id}
          entry={artist}
          showGrid={showGrid} // Passing down as props
        />
      ))}

      <Footer />
    </>
  );
}

