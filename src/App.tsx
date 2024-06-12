
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import React, { Suspense } from "react";
// import Message from './components/Message';
function App() {

    return (
        <Router>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">React MFE Host</Link>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/counter">Counter</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                      <Route path="/" element={<h4>Home</h4>} />
                      <Route path="/counter" element={<h4>Counter</h4>} />
                      <Route path="/login" element={<h4>Login</h4>} />
                      <Route path="/products" element={<h4>Products</h4>} />
                      
                    </Routes>
                </Suspense>

            </main>
        </Router>
    )
}

export default App;