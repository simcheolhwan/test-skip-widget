import { defineConfig } from "vite"
import { nodePolyfills } from "vite-plugin-node-polyfills"
import react from "@vitejs/plugin-react-swc"

export default defineConfig({
  plugins: [react(), nodePolyfills({ globals: { Buffer: true, global: true, process: true } })],
})
