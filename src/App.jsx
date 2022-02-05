import Info from "./components/Info"
import Footer from "./components/Footer"
import Skills from "./components/Skills";

function App() {
  return (
    <div className="card">
      <Info />
      <main>
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
