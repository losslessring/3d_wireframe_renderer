import { drawPolygon } from "./js/functions/drawPolygon/drawPolygon.js"
import { toMesh } from "./js/functions/toMesh/toMesh.js"
import { toPoint } from "./js/functions/toPoint/toPoint.js"
import { toPolygon } from "./js/functions/toPolygon/toPolygon.js"
import { square } from "./js/models/square.js"
import { doubleSquare } from "./js/models/doubleSquare.js"
import { cube } from "./js/models/cubeObj.js"
import { perspective } from "./js/functions/camera/perspective/perspective.js"
import { offsetToCenter } from "./js/functions/utils/offsetToCenter/offsetToCenter.js"
import { zoom } from "./js/functions/camera/zoom/zoom.js"
import { camera } from "./js/functions/camera/camera/camera.js"

const canvas = document.querySelector("canvas")

const context = canvas.getContext("2d")

//console.log(square.map(shape=>shape.map(toPoint)))
// console.log(square.map(toPolygon))

const mesh = toMesh(cube)

//const cam = camera(100, 8)
context.strokeStyle = "#fff"

//const perspCamera = camera(200, 12)

const drawMesh = cameraWithDistanceAndZoom => mesh => {
    mesh.forEach((polygon) => {
        drawPolygon(context)(
            polygon
                //.map((point) => perspective(point, 100))
                //.map((point) => zoom(point, 8))
                //.map((point) => camera(200, 12)(point))
                .map((point) => cameraWithDistanceAndZoom(point))
                .map((point) => offsetToCenter(point, context.canvas))
        )
    })
}

//drawMesh(perspCamera)(mesh)

const animate = (accumulator, increment) => () => {
    context.clearRect(0, 0, canvas.width, canvas.height)
    const perspCamera = camera(accumulator, 12)
    drawMesh(perspCamera)(mesh)
    requestAnimationFrame(animate(accumulator + increment, increment))
}

animate(200, 0.1)()