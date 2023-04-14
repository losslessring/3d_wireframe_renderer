import { toPoint } from "../toPoint/toPoint.js"

export function toPolygon(shape) {
    return shape.map(toPoint)
}