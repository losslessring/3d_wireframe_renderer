export function zoom(point, factor) {
    const scale = Math.pow(factor, 2)
    return {
        x: point.x * scale,
        y: point.y * scale
    }
    
}