import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import { Badge, Button, Card, Container } from "@/components/ui";

describe("ui components", () => {
  it("renders container, card, and badge content", () => {
    render(
      <Container>
        <Card title="Highlights">
          <Badge>Remote</Badge>
        </Card>
      </Container>
    );

    expect(screen.getByText("Highlights")).toBeInTheDocument();
    expect(screen.getByText("Remote")).toBeInTheDocument();
  });

  it("fires button clicks for primary and ghost variants", () => {
    const onPrimary = vi.fn();
    const onGhost = vi.fn();

    render(
      <div>
        <Button onClick={onPrimary}>Primary</Button>
        <Button variant="ghost" onClick={onGhost}>
          Ghost
        </Button>
      </div>
    );

    fireEvent.click(screen.getByRole("button", { name: "Primary" }));
    fireEvent.click(screen.getByRole("button", { name: "Ghost" }));

    expect(onPrimary).toHaveBeenCalledTimes(1);
    expect(onGhost).toHaveBeenCalledTimes(1);
  });
});
