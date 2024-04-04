import AppRoutes from './Routes.tsx';
import Header from '../components/Header/Header.tsx';
import "./App.scss";

function App() {

  return (
    <div className="page">
        <Header />
      <main className="main">
      <AppRoutes />
      </main>
    </div>
  );
}

export default App;
