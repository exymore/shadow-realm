/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.7 himars.gltf --transform
*/

import React, {memo} from 'react'
import {useTexture} from '@react-three/drei'
import {MeshStandardMaterial} from "three";

function Model(props) {
    const {nodes, group, ...rest} = props;

    const [normalMap, roughnessMap] = useTexture(['assets/models/himars/textures/Applique_176_normal.png', 'assets/models/himars/textures/Applique_176_metallicRoughness.png',]);

    const defaultBodyMaterial = new MeshStandardMaterial({
        color: 'rgb(154,155,137)', normalMap, roughnessMap
    });

    const cabinMaterial = new MeshStandardMaterial({
        color: 'rgb(180,182,160)', normalMap, roughnessMap
    });

    return (<group ref={group} {...rest} dispose={null}>
        <group name="Scene">
            <group name="Null" position={[0.002, 3.247, -3.997]} rotation={[1.566, -0.003, 0]} scale={0.01}>
                <group name="lift" position={[0, -238.046, 5.068]} rotation={[0, 0, -Math.PI / 2]}>
                    <mesh name="housing_housing" geometry={nodes.housing_housing.geometry}
                          material={defaultBodyMaterial} position={[-363.748, 0, -116.054]}/>
                    <mesh name="housing_housing_1" geometry={nodes.housing_housing_1.geometry}
                          material={defaultBodyMaterial} position={[-220.564, 0, -116.054]}>
                        <mesh name="cannons_cannons" geometry={nodes.cannons_cannons.geometry}
                              material={defaultBodyMaterial} position={[-86.764, 0, -15.85]}/>
                    </mesh>
                </group>
                <mesh name="lift_lift" geometry={nodes.lift_lift.geometry} material={defaultBodyMaterial}
                      position={[0, -5.482, -5.068]} rotation={[0, 0, -Math.PI / 2]}/>
            </group>
            <mesh name="Big_locker_Big_locker" geometry={nodes.Big_locker_Big_locker.geometry}
                  material={defaultBodyMaterial} position={[0.002, 3.669, 2.101]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="thingamabob_thingamabob" geometry={nodes.thingamabob_thingamabob.geometry}
                  material={defaultBodyMaterial} position={[0.002, 3.446, 4.229]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="Bed_Bed_1" geometry={nodes.Bed_Bed_1.geometry} material={defaultBodyMaterial}
                  position={[-0.049, 2.279, -6.355]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="Bed_Bed" geometry={nodes.Bed_Bed.geometry} material={defaultBodyMaterial}
                  position={[0.002, 2.164, -0.436]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="Bumper_Bumper" geometry={nodes.Bumper_Bumper.geometry} material={defaultBodyMaterial}
                  position={[0.002, 2.125, 7.739]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="Cabin_Cabin" geometry={nodes.Cabin_Cabin.geometry} material={cabinMaterial}
                  position={[0.002, 4.81, 6.085]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="Cabin_Cabin_1" geometry={nodes.Cabin_Cabin_1.geometry} material={cabinMaterial}
                  position={[0.002, 3.805, 6.202]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="glass" geometry={nodes.glass.geometry} position={[2.149, 5.358, 6.604]}
                  rotation={[Math.PI / 2, -0.149, -Math.PI / 2]} scale={0.01}>
                <meshBasicMaterial
                    color="black"
                    opacity={0.75}
                    transparent
                />
            </mesh>
            <mesh name="pCube10_pCube10" geometry={nodes.pCube10_pCube10.geometry} material={defaultBodyMaterial}
                  position={[-1.459, 6.1, 7.306]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="pCube11_pCube11" geometry={nodes.pCube11_pCube11.geometry} material={defaultBodyMaterial}
                  position={[2.723, 2.335, -7.672]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="pCube12_pCube12" geometry={nodes.pCube12_pCube12.geometry} material={defaultBodyMaterial}
                  position={[-2.695, 2.335, -7.672]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="pCube6_pCube6" geometry={nodes.pCube6_pCube6.geometry} material={defaultBodyMaterial}
                  position={[0.002, 6.1, 7.306]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="pCube7_pCube7" geometry={nodes.pCube7_pCube7.geometry} material={defaultBodyMaterial}
                  position={[0.321, 6.1, 7.306]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="pCube8_pCube8" geometry={nodes.pCube8_pCube8.geometry} material={defaultBodyMaterial}
                  position={[-0.339, 6.1, 7.306]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="pCube9_pCube9" geometry={nodes.pCube9_pCube9.geometry} material={defaultBodyMaterial}
                  position={[1.429, 6.1, 7.306]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="ball_box_ball_box" geometry={nodes.ball_box_ball_box.geometry}
                  material={defaultBodyMaterial} position={[2.039, 2.013, 2.26]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="box_box" geometry={nodes.box_box.geometry} material={defaultBodyMaterial}
                  position={[1.77, 1.951, -0.206]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="do_hickey_do_hickey" geometry={nodes.do_hickey_do_hickey.geometry}
                  material={defaultBodyMaterial} position={[2.028, 2.037, 1.011]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="lil_boxes_lil_boxes" geometry={nodes.lil_boxes_lil_boxes.geometry}
                  material={defaultBodyMaterial} position={[-1.736, 2.589, 3.665]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="pCube3_pCube3" geometry={nodes.pCube3_pCube3.geometry} material={defaultBodyMaterial}
                  position={[0.002, 2.335, -7.678]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="pCube4_pCube4" geometry={nodes.pCube4_pCube4.geometry} material={defaultBodyMaterial}
                  position={[-0.374, 2.335, -7.678]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="pCube5_pCube5" geometry={nodes.pCube5_pCube5.geometry} material={defaultBodyMaterial}
                  position={[0.374, 2.335, -7.678]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="pCylinder4_pCylinder4" geometry={nodes.pCylinder4_pCylinder4.geometry}
                  material={defaultBodyMaterial} position={[-2.188, 2.136, -7.715]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="pCylinder5_pCylinder5" geometry={nodes.pCylinder5_pCylinder5.geometry}
                  material={defaultBodyMaterial} position={[2.205, 2.136, -7.715]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="Rotor_Rotor" geometry={nodes.Rotor_Rotor.geometry} material={defaultBodyMaterial}
                  position={[0.002, 2.944, -3.935]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="Small_Locker_Small_Locker" geometry={nodes.Small_Locker_Small_Locker.geometry}
                  material={defaultBodyMaterial} position={[-1.324, 3.995, 3.456]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="Still_Still" geometry={nodes.Still_Still.geometry} material={defaultBodyMaterial}
                  position={[1.166, 4.517, 3.453]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="tank_tank" geometry={nodes.tank_tank.geometry} material={defaultBodyMaterial}
                  position={[-1.881, 1.783, 2.736]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="thingy_thingy" geometry={nodes.thingy_thingy.geometry} material={defaultBodyMaterial}
                  position={[-1.915, 1.851, 0.203]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="BIG_BOLTS" geometry={nodes.BIG_BOLTS.geometry} material={defaultBodyMaterial}
                  position={[2.447, 1.454, 4.91]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}/>
            <mesh name="BIG_BOLTS_2" geometry={nodes.BIG_BOLTS_2.geometry} material={defaultBodyMaterial}
                  position={[2.447, 1.454, -4.054]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}/>
            <mesh name="BIG_BOLTS_3" geometry={nodes.BIG_BOLTS_3.geometry} material={defaultBodyMaterial}
                  position={[2.447, 1.454, -6.668]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}/>
            <mesh name="RIM" geometry={nodes.RIM.geometry} material={defaultBodyMaterial}
                  position={[2.447, 1.454, 4.91]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}/>
            <mesh name="RIM_2" geometry={nodes.RIM_2.geometry} material={defaultBodyMaterial}
                  position={[2.447, 1.454, -4.054]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}/>
            <mesh name="RIM_3" geometry={nodes.RIM_3.geometry} material={defaultBodyMaterial}
                  position={[2.447, 1.454, -6.668]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}/>
            <mesh name="SMALL_BOLT" geometry={nodes.SMALL_BOLT.geometry} material={defaultBodyMaterial}
                  position={[2.447, 1.454, 4.91]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}/>
            <mesh name="SMALL_BOLT_2" geometry={nodes.SMALL_BOLT_2.geometry} material={defaultBodyMaterial}
                  position={[2.447, 1.454, -4.054]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}/>
            <mesh name="SMALL_BOLT_3" geometry={nodes.SMALL_BOLT_3.geometry} material={defaultBodyMaterial}
                  position={[2.447, 1.454, -6.668]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}/>
            <mesh name="TIR" geometry={nodes.TIR.geometry} material={defaultBodyMaterial}
                  position={[2.447, 1.454, 4.91]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="TIR_2" geometry={nodes.TIR_2.geometry} material={defaultBodyMaterial}
                  position={[2.447, 1.454, -4.054]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
            <mesh name="TIR_3" geometry={nodes.TIR_3.geometry} material={defaultBodyMaterial}
                  position={[2.447, 1.454, -6.668]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01}/>
        </group>
    </group>)
}

export default memo(Model);

