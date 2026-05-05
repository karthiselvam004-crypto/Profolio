import { BrowserRouter } from "react-router-dom";
import Sidebar from "./Screens/Sidebar";
import AppRouter from "./router/Router";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />
        <main className="app-content">
          <AppRouter />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;