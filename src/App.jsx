import ReactDOM from "react-dom/client";
import {createRoot} from "react-dom/client"
import SearchParams from "/SearchParams";
import Details from "./Details";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Link, BrowserRouter, Routes, Route} from "react-router-dom"

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        }
    }
})

    const App = () => {
        return (
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <header>
                        <Link to="/">Adopt Me</Link>
                    </header>
                        <Routes>
                            <Route path="/details/:id" element={<Details />}></Route>
                            <Route path="/" element={<SearchParams />}></Route>
                        </Routes>
                </QueryClientProvider>
            </BrowserRouter>
        )
    }


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);