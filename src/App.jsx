import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import PageNotFound from "./pages/PageNotFound";
import Contact from "./pages/Contact";

function App() {
    return (
        <div className="App bg-blue-950 text-white min-h-dvh w-full flex flex-col">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/* <Route path="/projects" element={<Projects />} /> */}
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
