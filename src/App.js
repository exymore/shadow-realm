import './App.css';
import {Suspense} from "react";
import Scene from "./modules/DemocracyLauncher/Scene";

function App() {
    return (
        <div style={{width: '100vw', height: '100vh'}}>
            <Scene/>
        </div>
    );
}

export default App;
