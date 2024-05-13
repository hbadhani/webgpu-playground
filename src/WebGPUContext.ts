export class WebGPUContext {
    private readonly _device: Promise<GPUDevice>;

    constructor() {
        this._device = this._initDevice();
    }

    async _initDevice() {
        if (!(navigator as any).gpu) {
            throw Error("WebGPU not supported.");
        }

        const adapter = await navigator.gpu.requestAdapter();
        if (!adapter) {
            throw Error("Couldn't request WebGPU adapter.");
        }

        return adapter.requestDevice();
    }

    get device() {
        return this._device;
    }
}
