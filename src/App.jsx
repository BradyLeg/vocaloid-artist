import mikuData from "./mikuData.js";
import Artist from "./components/Artist.jsx";

export default function App() {

  const artistElements = mikuData.map((data) => (
    <Artist key={data.id} entry={data} />
  ));

  return (
    <>
      <h1>Well MIku</h1>
      {artistElements}
    </>
  );
}
