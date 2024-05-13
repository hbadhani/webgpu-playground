import { WebGPUContext } from "./WebGPUContext.js";

async function main() {
    const context = new WebGPUContext();
    // get device, catrch error
    try {
      const device = await context.device;
      console.log(device);
    } catch (e) {
      console.error(e);
    }
  }
  
  window.onload = main;
  