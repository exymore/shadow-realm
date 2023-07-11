import {Html} from '@react-three/drei'

function Loader({progress}) {
    return <Html center>
        <h1 className="text-8xl text-bold text-slate-800">{Number(progress).toFixed(0)} % loaded</h1>
    </Html>
}

export default Loader
