import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import Pagenotfound from "./pages/Pagenotfound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";

const URL = "http://localhost:9000/cities";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        const res = await fetch(`${URL}`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There is an error Loading data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="product" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route path="cities/:id" element={<City />} />
            <Route
              path="countries"
              element={<CountryList cities={cities} isLoading={isLoading} />}
            />
            <Route path="form" element={<p> Form </p>} />
          </Route>
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
