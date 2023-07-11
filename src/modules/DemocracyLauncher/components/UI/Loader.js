import {Html} from '@react-three/drei'

function Loader({progress}) {
    return <Html>
        {progress > 0 &&
            <div className="loader-container">
                <div className="dimmer"></div>
                <h1 className="loader-text">Loading: {Number(progress).toFixed(0)} %</h1>
            </div>
        }
    </Html>
}

export default Loader
