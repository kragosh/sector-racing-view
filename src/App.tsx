import React from 'react';
import logo from './logo.svg';
import './App.css';
import TrackOverviewView from "./views/TrackOverviewView";

import {
    createHashRouter,
    RouterProvider,
} from "react-router-dom";
import TrackDetailsView from "./views/TrackDetailsView";

const router = createHashRouter([
    {
        path: "/",
        element: <TrackOverviewView/>,
    },
    {
        path: "/track/:id",
        element: <TrackDetailsView />,
    },
]);

function App() {
    return (
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    );
}

export default App;
