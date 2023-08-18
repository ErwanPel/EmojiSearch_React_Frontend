import { useState } from "react";

import data from "./assert/data/data.json";
import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";

import "./assert/css/App.css";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Search setSearch={setSearch} data={data} />
      <Line data={data} search={search} />
      <Footer />
    </>
  );
}

export default App;
