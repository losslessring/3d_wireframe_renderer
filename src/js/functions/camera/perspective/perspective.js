export function perspective(point, distance) {
    const fov = point.z + distance
    return {
        x: point.x / fov,
        y: point.y / fov
    }
    
}