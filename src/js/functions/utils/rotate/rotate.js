export const rotate = (point, rotation) => {
    // const sin = {
    //     x: Math.sin(rotation.x),
    //     y: Math.sin(rotation.y),
    //     z: Math.sin(rotation.z)
    // }

    // const cos = {
    //     x: Math.cos(rotation.x),
    //     y: Math.cos(rotation.y),
    //     z: Math.cos(rotation.z)
    // }

    let transformedPoint = {...point}

    let temp1, temp2

    temp1 = Math.cos(rotation.x) * point.y + Math.sin(rotation.x) * point.z
    temp2 = -Math.sin(rotation.x) * point.y + Math.cos(rotation.x) * point.z
    transformedPoint.y = temp1
    transformedPoint.z = temp2

    temp1 = Math.cos(rotation.y) * point.x + Math.sin(rotation.y) * point.z
    temp2 = -Math.sin(rotation.y) * point.x + Math.cos(rotation.y) * point.z
    transformedPoint.x = temp1
    transformedPoint.z = temp2

    temp1 = Math.cos(rotation.z) * point.x + Math.sin(rotation.z) * point.y
    temp2 = -Math.sin(rotation.z) * point.x + Math.cos(rotation.z) * point.y
    transformedPoint.x = temp1
    transformedPoint.y = temp2

    return {
        x: transformedPoint.x,
        y: transformedPoint.y,
        z: transformedPoint.z
    }
}