import './App.css';
import { UseArrayPage, UseStoragePage, UseTogglePage } from './pages'

function App() {

  return (
    <div className="App">
      <h2>Custom Hooks</h2>
      <UseStoragePage />
      <UseTogglePage />
      <UseArrayPage />
    </div>
  );
}

export default App;
