export const transform = (transformFunction) => (mesh) => {
    return mesh.map((polygon) => {
        return polygon
            .map((point) => transformFunction(point))
    })
}
