import React from "react";

// React Components
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";


// CSS
import "./styles/components/app.sass"

function App() {
    return (
        <div id="portfolio">
            <h1>Fernando Torres</h1>
            <Sidebar/>
            <MainContent/>
        </div>
    )
}

export default App