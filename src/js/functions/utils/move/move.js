export const move = (offsetPosition) => (point) => {
    return {
        x: point.x + offsetPosition.x,
        y: point.y + offsetPosition.y,
        z: point.z + offsetPosition.z,
    }
}
