import mikuData from "./mikuData.js";
import Artist from "./components/Artist.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {

  const artistElements = mikuData.map((data) => {
    <Artist entry={data} />
  })

  return (
    <>
      <Header />
      <h1>Well MIku</h1>
      {artistElements}
      <Footer />
    </>
  );
}
