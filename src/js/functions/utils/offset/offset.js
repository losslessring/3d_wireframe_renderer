export const offset = (point, offsetPosition) => {
    return {
        x: point.x + offsetPosition.x,
        y: point.y + offsetPosition.y,
        z: point.z + offsetPosition.z
    }
}