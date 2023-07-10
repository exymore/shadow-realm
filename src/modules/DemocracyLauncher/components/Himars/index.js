import {Text3D, useAnimations, useTexture} from "@react-three/drei";
import {useEffect, useRef, useState} from "react";
import {MeshStandardMaterial} from "three";
import {
    ANIMATION_DURATION,
    ANIMATION_ONE_PERCENT_DURATION,
    DELIVERY_INTERVAL, GMLRS_WARHEAD_WEIGHT,
    LAUNCH_START_DELAY
} from "../../constants";

const setFBXMaterial = (model, material) => {
    if (['glass', 'WHEELS'].includes(model.name)) return;
    if (model.children) {
        if (model.children.length === 0) {
            model.material = material
        } else {
            model.children.forEach(mesh => {
                setFBXMaterial(mesh, material)
            })
        }
    }
};

function Himars({fbx, position, textPosition, animations, setKgDelivered, setIsLaunching}) {

    const [normalMap, roughnessMap] = useTexture([
        'assets/models/himars/textures/Applique_176_normal.png',
        'assets/models/himars/textures/Applique_176_metallicRoughness.png',
    ]);

    const animationInterval = useRef(null);
    const deliveryInterval = useRef(null);
    const startSetKgDelivered = useRef(null);
    const stopSetKgDelivered = useRef(null);

    const [hovered, setHovered] = useState(false);
    const [fireCompletedPercent, setFireCompletedPercent] = useState(0);

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered]);

    const {actions, names} = useAnimations(animations, fbx);

    const isDemocracyLaunching = fireCompletedPercent > 0;
    const deliveryAnimation = actions[names[names.length - 1]];

    let deliveryText = isDemocracyLaunching ? `Democracy\nLaunched! ${fireCompletedPercent}%` : `Launch\nDemocracy!`;

    useEffect(() => {
        if (fireCompletedPercent >= 100) {
            clearInterval(animationInterval.current);
            clearInterval(deliveryInterval.current);

            clearTimeout(startSetKgDelivered.current);
            clearTimeout(stopSetKgDelivered.current);

            deliveryAnimation.stop();
            setFireCompletedPercent(0);
            setIsLaunching(false);
        }
    }, [deliveryAnimation, fireCompletedPercent, setIsLaunching]);


    const fire = () => {
        if (isDemocracyLaunching) return;
        setIsLaunching(true);
        deliveryAnimation.play();

        startSetKgDelivered.current = setTimeout(() => {
            deliveryInterval.current = setInterval(() => {
                setKgDelivered(prev => prev + GMLRS_WARHEAD_WEIGHT);
            }, DELIVERY_INTERVAL);
        }, LAUNCH_START_DELAY);
        stopSetKgDelivered.current = setTimeout(() => {
            clearInterval(deliveryInterval.current);
        }, ANIMATION_DURATION);

        animationInterval.current = setInterval(() => {
            setFireCompletedPercent(prev => prev + 1);
        }, ANIMATION_ONE_PERCENT_DURATION);
    };

    const defaultBodyMaterial = new MeshStandardMaterial({
        color: 'rgb(154,155,137)',
        normalMap,
        roughnessMap
    });

    const cabinMaterial = new MeshStandardMaterial({
        color: 'rgb(180,182,160)',
        normalMap,
        roughnessMap
    });

    setFBXMaterial(fbx, defaultBodyMaterial);
    setFBXMaterial(fbx.children[2], cabinMaterial);


    return (
        <>
            <primitive object={fbx} scale={0.04} position={position}/>

            <Text3D
                position={textPosition}
                rotation={[0.2, -3, 0]}
                curveSegments={32}
                bevelEnabled
                bevelSize={0.08}
                bevelThickness={0.8}
                height={0.5}
                lineHeight={0.6}
                letterSpacing={-0.06}
                size={4}
                font="/assets/fonts/Inter_Bold.json"
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                onClick={fire}
            >
                {deliveryText}
                <meshNormalMaterial/>
            </Text3D>
        </>
    )
}

export default Himars;
