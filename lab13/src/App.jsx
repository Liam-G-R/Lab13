import { BrowserRouter, Routes , Route } from "react-router-dom"
import LoginPage  from "./pages/LoginPage"
import HomeePage from "./pages/HomPage"
import CategoryPage from "./pages/CategoryPage"
import CategoryFormPage from "./pages/category/CategoryFormPage"
import CategoryEditFormPage from "./pages/category/CategoryEditFormPage"
import SeriePage from "./pages/SeriePage"
import SerieFormPage from "./pages/serie/SerieFormPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/home" element={<HomeePage/>} />
        <Route path="/categories" element={<CategoryPage/>} />
        <Route path="/categories/new" element={<CategoryFormPage />} />
        <Route path="/categories/edit/:id" element={<CategoryEditFormPage />} />
        <Route path="/series" element={<SeriePage/>} />
        <Route path="/series/new" element={<SerieFormPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
