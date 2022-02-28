import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AccomodationSheet from "./pages/AccomodationSheet";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/fiche-logement/:id"
          element={
            <Layout>
              <AccomodationSheet />
            </Layout>
          }
        />
        <Route
          path="/a-propos"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
