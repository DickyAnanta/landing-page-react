import FooterComponent from "./components/FooterComponent";
import NavbarComponent from "./components/NavbarComponent";

import HomePage from "./pages/HomePage";
import TentangKamiPage from "./pages/TentangKamiPage";
import UsahaKamiPage from "./pages/UsahaKamiPage";

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <NavbarComponent />
            <Routes>
                <Route path="/" Component={HomePage} />
                <Route path="/usahaKami" Component={UsahaKamiPage} />
                <Route path="/tentangKami" Component={TentangKamiPage} />
            </Routes>
            <FooterComponent />
        </>
    );
}

export default App;
