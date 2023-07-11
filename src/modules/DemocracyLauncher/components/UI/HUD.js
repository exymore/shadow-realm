import Button from "./Button";
import {useSpring, animated, easings} from "react-spring";
import {MAX_LAUNCHERS_COUNT} from "../../constants";
import {memo} from "react";

function HUD({addModel, kgDelivered, models, removeModel, isLaunching, isMobileScreen}) {

    const {number} = useSpring({
        from: {number: 0},
        number: kgDelivered,
        delay: 100,
        config: {
            easing: easings.easeInOutQuad,
        }
    });

    return (
        <div className="fixed z-10 p-6 flex justify-between w-full">
            <div className="toast toast-top toast-start">
                <div className="card w-92 bg-base-100/10 shadow-xl gap-1">
                    <Button onClick={addModel} disabled={models.length === MAX_LAUNCHERS_COUNT}>Add
                        democracy launcher!
                    </Button>
                    <Button onClick={removeModel}
                            disabled={models.length === 1 || isLaunching}
                    >Remove democracy launcher
                    </Button>
                </div>
            </div>

            <div className={`toast ${isMobileScreen ? 'toast-bottom' : 'toast-top'} toast-end`}>
                <div className="card w-96 bg-base-100/10 shadow-xl">
                    <h2 className="font-sans text-white text-2xl font-bold px-5 py-4 rounded-lg">Democracy
                        launchers: {models.length}/3</h2>

                    <div className="px-5 py-4 rounded-lg">
                        <animated.span
                            style={{textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black'}}
                            className="animated-counter font-sans text-yellow-400 text-7xl text-stroke-3 font-bold mr-2">
                            {number.to(n => n.toFixed(0))}
                        </animated.span>
                        <span
                            className="font-sans text-white text-xl font-bold">KG</span>
                        <p className="font-sans text-white text-xl font-bold">of democracy
                            delivered!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(HUD);
