export const rotate = (point, rotation) => {
    const transformYZ = (point) => {
        return {
            x: point.x,
            y: Math.cos(rotation.x) * point.y + Math.sin(rotation.x) * point.z,
            z: -Math.sin(rotation.x) * point.y + Math.cos(rotation.x) * point.z,
        }
    }

    const transformXZ = (point) => {
        return {
            x: Math.cos(rotation.y) * point.x + Math.sin(rotation.y) * point.z,
            y: point.y,
            z: -Math.sin(rotation.y) * point.x + Math.cos(rotation.y) * point.z,
        }
    }

    const transformXY = (point) => {
        return {
            x: Math.cos(rotation.z) * point.x + Math.sin(rotation.z) * point.y,
            y: -Math.sin(rotation.z) * point.x + Math.cos(rotation.z) * point.y,
            z: point.z,
        }
    }

    const transformedPoint = transformXY(transformXZ(transformYZ(point)))

    return transformedPoint
}
