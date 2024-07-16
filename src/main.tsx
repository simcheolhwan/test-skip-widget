import { createRoot } from "react-dom/client"
import { MantineProvider } from "@mantine/core"
import { SwapWidget } from "@skip-go/widget"
import "@mantine/core/styles.css"
import theme from "./theme"

createRoot(document.getElementById("root") as HTMLElement).render(
  <MantineProvider theme={theme} defaultColorScheme="dark">
    <div style={{ width: "450px", height: "820px" }}>
      <SwapWidget />
    </div>
  </MantineProvider>,
)
