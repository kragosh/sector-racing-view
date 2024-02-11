import React from 'react';
import './App.css';
import TrackOverviewView from "./views/TrackOverviewView";
import {createHashRouter, RouterProvider,} from "react-router-dom";
import TrackDetailsView from "./views/TrackDetailsView";
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faArrowLeft,
    faChevronLeft,
    faChevronRight,
    faCloudRain,
    faSnowflake,
    faSun
} from '@fortawesome/free-solid-svg-icons'

library.add(faChevronLeft, faChevronRight, faArrowLeft, faSun, faCloudRain, faSnowflake)

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
