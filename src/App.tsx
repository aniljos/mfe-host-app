
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router} from 'react-router-dom'
import React from "react";

import Header from './components/Header';
import MainContent from './components/MainContent';
import { routes } from './routes/routes';



function App() {

    const [appRoutes] = React.useState(routes);

    

    return (
        <Router>
            <>
                <Header routes={appRoutes}/>
            </>
            <>
                <MainContent routes={appRoutes}/>
            </>
        </Router>
    )
}

export default App;