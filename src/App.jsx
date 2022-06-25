import "./App.scss";
import Header from "./components/Header/Header";
import Card from "./components/cards/Card";
import data from "./helper/data";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />

      <main>
        <Card data={data} />
      </main>
    </div>
  );
}

export default App;
