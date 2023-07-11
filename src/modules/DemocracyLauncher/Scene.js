import {Suspense, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, PerspectiveCamera, Sky, useProgress} from '@react-three/drei';
import Grass from "./components/Grass";
import Himars from "./components/Himars";
import HUD from "./components/UI/HUD";
import Loader from "./components/UI/Loader";

const launchers = [{idx: 0, position: [0, -2, 0], textPosition: [10, 10, -40]}, {
    idx: 1, position: [50, -2, 0], textPosition: [60, 10, -40]
}, {idx: 2, position: [-50, -2, 0], textPosition: [-40, 10, -40]}];

export default function Scene() {
    const isMobileScreen = window.innerWidth < 768;

    const {progress} = useProgress();
    const isReady = progress === 100;

    const [visibleIds, setVisibleIds] = useState([0]);
    const [kgDelivered, setKgDelivered] = useState(0);
    const [isLaunching, setIsLaunching] = useState(false);

    const addModel = () => {
        if (visibleIds.length === launchers.length) return;
        const newModelId = launchers[visibleIds.length].idx;
        setVisibleIds(ids => [...ids, newModelId]);
    };

    const removeModel = () => {
        if (visibleIds.length === 1) return;
        setVisibleIds(models => models.slice(0, -1));
    };

    return (<>
        {isReady && <HUD addModel={addModel} removeModel={removeModel} visibleModelsCount={visibleIds.length}
                         kgDelivered={kgDelivered}
                         isLaunching={isLaunching} isMobileScreen={isMobileScreen}/>}

        <Canvas>
            <Sky azimuth={1} inclination={0.6} distance={1000}/>

            <pointLight position={[150, 10, 60]} intensity={0.3}/>
            <pointLight position={[-150, 10, 60]} intensity={0.7}/>
            <pointLight position={[0, 100, -100]} intensity={0.2}/>

            <Suspense fallback={<Loader progress={progress}/>}>
                <Grass width={500} instances={200000}/>

                {visibleIds.map((idx) => <Himars
                    key={idx}
                    visible={idx < visibleIds.length}
                    setKgDelivered={setKgDelivered}
                    setIsLaunching={setIsLaunching}
                    {...launchers[idx]}
                />)}
            </Suspense>

            <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2.25}
                           makeDefault/>
            <PerspectiveCamera makeDefault position={[120, 0, 140]} fov={isMobileScreen ? 64 : 36}/>
        </Canvas>
    </>)
}
