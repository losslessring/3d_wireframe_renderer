export const drawPolygon  = context  => polygon => {

    context.save()
    context.beginPath()

    const first = polygon[0]
    context.moveTo(first.x, first.y)
    polygon.forEach((point) => {
        context.lineTo(point.x, point.y)
    })
    context.lineTo(first.x, first.y)
    context.stroke()
    context.restore()
}
