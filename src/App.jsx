import { useState } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import ResultPage from "./components/ResultPage";
import FormPage from "./components/FormPage";

function App() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(true);

  const handleSearch = (value) => {
    setSearch(value);
  };

  return (
    <div className="App">
      <NavBar handleSearch={handleSearch} setPage={setPage} />
      {page ? <ResultPage search={search} /> : <FormPage />}
    </div>
  );
}

export default App;