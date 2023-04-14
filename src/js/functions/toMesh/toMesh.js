import { toPolygon } from "../toPolygon/toPolygon.js"

export function toMesh(shape) {
    return shape.map(toPolygon)
}