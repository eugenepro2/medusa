  import * as React from "react"
  import { cleanup, render, screen } from "@testing-library/react"

  import BroomSparkle from "../broom-sparkle"

  describe("BroomSparkle", () => {
    it("should render the icon without errors", async () => {
      render(<BroomSparkle data-testid="icon" />)


      const svgElement = screen.getByTestId("icon")

      expect(svgElement).toBeInTheDocument()

      cleanup()
    })
  })