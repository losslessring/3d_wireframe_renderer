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
import { move } from "./js/functions/utils/move/move.js"
import { rotate } from "./js/functions/utils/rotate/rotate.js"
import { transform } from "./js/functions/utils/transform/transform.js"

const canvas = document.querySelector("canvas")

const context = canvas.getContext("2d")

const mesh = toMesh(cube)

context.strokeStyle = "#fff"

const drawMesh = (cameraWithDistanceAndZoom) => (mesh) => {
    mesh.forEach((polygon) => {
        drawPolygon(context)(
            polygon
                .map((point) => cameraWithDistanceAndZoom(point))
                .map((point) => offsetToCenter(point, context.canvas))
        )
    })
}

const animate = (accumulator, increment) => (mesh) => (time) => {
    context.clearRect(0, 0, canvas.width, canvas.height)

    const cameraDistance = 200
    const perspCamera = camera(cameraDistance, 12)

    const offsetPosition = {
        x: Math.sin(time / 300) * 80,
        y: Math.sin(time / 1000) * 30,
        z: 0,
    }
    const rotation = { x: 0, y: accumulator, z: 0 }

    const rotatedMesh = transform(rotate(rotation))(mesh)
    const movedMesh = transform(move(offsetPosition))(rotatedMesh)
    const transformedMesh = movedMesh

    drawMesh(perspCamera)(transformedMesh)
    requestAnimationFrame(animate(accumulator + increment, increment)(mesh))
}

animate(0, 0.1)(mesh)()
