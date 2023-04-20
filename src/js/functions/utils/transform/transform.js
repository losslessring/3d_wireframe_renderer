export const transform = (transformFunction) => (mesh) => {
    mesh.forEach((polygon) => {
        polygon
            .map((point) => transformFunction(point))
    })
}
