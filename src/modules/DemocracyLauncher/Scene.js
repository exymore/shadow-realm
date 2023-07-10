import {Suspense, useMemo, useState} from 'react'
import {Canvas, useLoader} from '@react-three/fiber'
import {OrbitControls, PerspectiveCamera, Sky, useProgress} from '@react-three/drei';
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader'
import Grass from "./components/Grass";
import Himars from "./components/Himars";
import HUD from "./components/UI/HUD";
import Loader from "./components/UI/Loader";

const launchersProps = [
    {idx: 0, position: [0, 0, 0], textPosition: [10, 10, -40]},
    {idx: 1, position: [50, 0, 0], textPosition: [60, 10, -40]},
    {idx: 2, position: [-50, 0, 0], textPosition: [-40, 10, -40]}
];

export default function Scene() {
    const {progress} = useProgress();
    const isReady = progress === 100;

    const baseFbx = useLoader(FBXLoader, 'assets/models/himars/himars.fbx');
    const {animations} = baseFbx;

    const launchers = useMemo(() => launchersProps.map(props => ({...props, fbx: baseFbx.clone()})), [baseFbx]);

    const [models, setModels] = useState([launchers[0]]);
    const [kgDelivered, setKgDelivered] = useState(0);
    const [isLaunching, setIsLaunching] = useState(false);

    const removeModel = () => {
        if (models.length === 1) return;
        setModels(models => models.slice(0, -1));
    };

    const addModel = () => {
        if (models.length === launchers.length) return;
        const newModel = launchers[models.length];
        setModels(models => [...models, newModel]);
    };

    return (
        <>
            {isReady && <HUD addModel={addModel} removeModel={removeModel} models={models} kgDelivered={kgDelivered}
                             isLaunching={isLaunching}/>}

            <Canvas>
                <Sky azimuth={1} inclination={0.6} distance={1000}/>

                <pointLight position={[150, 10, 60]} intensity={0.7}/>
                <pointLight position={[-150, 10, 60]} intensity={0.7}/>
                <pointLight position={[0, 100, -100]} intensity={0.2}/>

                <Suspense fallback={<Loader progress={progress}/>}>
                    <Grass width={500} instances={500000}/>

                    {models.map((model, index) =>
                        <Himars
                            key={index}
                            animations={animations}
                            setKgDelivered={setKgDelivered}
                            setIsLaunching={setIsLaunching}
                            {...model}
                        />
                    )}
                </Suspense>

                <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2.25}
                               makeDefault/>
                <PerspectiveCamera makeDefault position={[120, 0, 140]} fov={36}/>
            </Canvas>
        </>
    )
}
