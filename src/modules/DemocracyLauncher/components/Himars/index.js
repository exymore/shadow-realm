import {Text3D, useAnimations, useGLTF} from "@react-three/drei";
import {memo, useCallback, useEffect, useRef, useState} from "react";
import {
    ANIMATION_DURATION,
    ANIMATION_ONE_PERCENT_DURATION,
    DELIVERY_INTERVAL,
    FANCY_TEXT_IDLE,
    FANCY_TEXT_LAUNCHED,
    GMLRS_WARHEAD_WEIGHT,
    LAUNCH_START_DELAY
} from "../../constants";
import Model from "./Model";
import {useFrame} from "@react-three/fiber";

function Himars({position, textPosition, setKgDelivered, setIsLaunching, visible}) {
    const [deliveryText, setDeliveryText] = useState(FANCY_TEXT_IDLE);

    const animationInterval = useRef(null);
    const deliveryInterval = useRef(null);

    const startSetKgDelivered = useRef(null);
    const stopSetKgDelivered = useRef(null);

    const fireCompletedPercent = useRef(0);
    const isDemocracyLaunching = useRef(false);

    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered]);

    const group = useRef();
    const {nodes, animations} = useGLTF('/assets/models/himars/himars-transformed.glb');
    const {actions, names} = useAnimations(animations, group);

    const deliveryAnimation = actions?.[names[0]];

    useFrame(() => {
        if (fireCompletedPercent.current > 0 && fireCompletedPercent.current < 100) {
            isDemocracyLaunching.current = true;
        }

        if (fireCompletedPercent.current >= 100) {
            isDemocracyLaunching.current = false;

            clearInterval(animationInterval.current);
            clearInterval(deliveryInterval.current);

            clearTimeout(startSetKgDelivered.current);
            clearTimeout(stopSetKgDelivered.current);

            deliveryAnimation.stop();
            fireCompletedPercent.current = 0;
            setIsLaunching(false);
            setDeliveryText(FANCY_TEXT_IDLE)
        }
    });


    const fire = useCallback(() => {
        if (isDemocracyLaunching.current) return;
        setIsLaunching(true);
        setDeliveryText(FANCY_TEXT_LAUNCHED);

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
            fireCompletedPercent.current += 1
        }, ANIMATION_ONE_PERCENT_DURATION);
    }, [deliveryAnimation, isDemocracyLaunching, setIsLaunching, setKgDelivered]);


    return (<>
        <Model nodes={nodes} group={group} position={position} scale={4} visible={visible}/>
        <Text3D
            visible={visible}
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
    </>)
}

useGLTF.preload('/assets/models/himars/himars-transformed.glb');

export default memo(Himars);
