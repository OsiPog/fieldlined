import init from "./lib/pkg"

const canvas = document.querySelector("canvas")
const gl = canvas.getContext('webgl', { antialias: true })
let lib = await init()

if (!gl) {
    throw "Failed to initialize WebGL"
}

lib.say_hi()