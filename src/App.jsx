import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Details from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { routes } from "./routes.js";
import { useDentistStates } from "./Components/utils/global.context";

function App() {

  const { themeState } = useDentistStates();

  return (
    <div className={themeState.theme ? 'App' : 'dark'}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.details} element={<Details />} />
        <Route path={routes.favs} element={<Favs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
