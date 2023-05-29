import init, { Renderer } from "./lib/pkg/lib.js"

const canvas = document.querySelector("#app>canvas")
const gl = canvas.getContext('webgl', { antialias: true })
let lib = await init()

if (!gl) {
    throw "Failed to initialize WebGL"
}

// Alpha channel in webgl
gl.enable(gl.BLEND)
gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

const FPS_THROTTLE = 1000.0 / 60.0
const initialTime = Date.now()
const renderer = new Renderer()

let lastDrawTime = -1;

// Main loop

const mainLoop = () => {
    window.requestAnimationFrame(mainLoop)
    const currTime = Date.now()

    if (currTime >= lastDrawTime + FPS_THROTTLE) {
        lastDrawTime = currTime

        // Update the canvas
        if ((window.innerHeight != canvas.height) || (window.innerWidth != canvas.width)) {
            const [h, w] = [window.innerHeight, window.innerWidth]

            canvas.height = h
            canvas.style.height = h
            canvas.width = w
            canvas.style.width = w

            gl.viewport(0, 0, w, h)
        }

        let elapsedTime = currTime - initialTime

    }
}

mainLoop()

