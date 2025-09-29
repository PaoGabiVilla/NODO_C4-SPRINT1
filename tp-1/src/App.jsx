import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar siempre visible arriba */}
      <Navbar className="h-16" />

      {/* Main ocupa todo el espacio disponible */}
      <main className="flex-grow overflow-hidden">
        <Main />
      </main>

      {/* Footer siempre visible abajo */}
      <Footer className="h-16" />
    </div>
  );
}

export default App;
