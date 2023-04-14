export function offsetToCenter(point, canvas) {
    return {
        x: point.x + canvas.width /2,
        y: point.y + canvas.height /2
    }
}