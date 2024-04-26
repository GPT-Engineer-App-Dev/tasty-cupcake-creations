import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Recipes from "./pages/Recipes.jsx";
import ClassicVanillaCupcakePage from './pages/ClassicVanillaCupcakePage.jsx';
import RichChocolateCupcakePage from './pages/RichChocolateCupcakePage.jsx';
import StrawberryShortcakeCupcakePage from './pages/StrawberryShortcakeCupcakePage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/classic-vanilla" element={<ClassicVanillaCupcakePage />} />
        <Route path="/recipes/rich-chocolate" element={<RichChocolateCupcakePage />} />
        <Route path="/recipes/strawberry-shortcake" element={<StrawberryShortcakeCupcakePage />} />
      </Routes>
    </Router>
  );
}

export default App;