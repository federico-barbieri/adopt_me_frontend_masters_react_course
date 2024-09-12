import ReactDOM from "react-dom/client";
import {createRoot} from "react-dom/client"
import SearchParams from "/SearchParams";
import Details from "./Details";
import {BrowserRouter, Routes, Route} from "react-router-dom"

    const App = () => {
        return (
            <BrowserRouter>
                <h1>Adopt me</h1>
                <Routes>
                    <Route path="/details/:id" element={<Details />}></Route>
                    <Route path="/" element={<SearchParams />}></Route>
                </Routes>
            </BrowserRouter>
        )
    }


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);