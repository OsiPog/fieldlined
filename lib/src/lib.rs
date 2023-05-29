extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub struct Renderer {

}

#[wasm_bindgen]
impl Renderer {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        Self {

        }
    }

    pub fn update(&mut self, time: f32, height: i32, width: i32) -> Result<(), JsValue> {
        Ok(())
    }

    pub fn render(&mut self) {
        log("Rendered")
    }
}
