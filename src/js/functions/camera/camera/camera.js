import { perspective } from '../perspective/perspective.js'
import {zoom} from '../zoom/zoom.js'

export const camera = (distance, zoomFactor) => point => {
    return zoom(perspective(point, distance), zoomFactor)
    
}
