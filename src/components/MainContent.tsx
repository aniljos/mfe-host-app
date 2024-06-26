import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoute } from "../routes/routes";
import ProtectedRoute from "./ProtectedRoute";
type MainContentProps = {
    routes: Array<AppRoute>

}

function MainContent({routes}: MainContentProps) {
    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {routes.map(route => {

                        const Element = route.element;
                        if (route.secure) {
                            return (
                                <Route key={route.path} path={route.path} element={<ProtectedRoute> <Element {...route.props} /> </ProtectedRoute>} />
                            )
                        }
                        else {
                            return (
                                <Route key={route.path} path={route.path} element={<Element {...route.props} />} />
                            )
                        }

                    })}
                   
                </Routes>
            </Suspense>
        </main>
    );
}

export default MainContent;