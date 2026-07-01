import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { App } from "@/App";
import { profile, projects } from "@/content";

describe("App", () => {
  it("renders recruiter-facing summary, projects, and contact actions", () => {
    render(<App />);

    expect(screen.getByText(profile.name)).toBeInTheDocument();
    expect(screen.getByText(profile.title)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /featured projects/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /email me/i })).toHaveAttribute(
      "href",
      `mailto:${profile.email}`
    );

    for (const project of projects) {
      expect(screen.getByRole("heading", { name: project.name })).toBeInTheDocument();
    }

    expect(screen.getAllByRole("link", { name: /github/i })).toHaveLength(projects.length);
  });

  it("links the primary CTA to the projects section", () => {
    render(<App />);

    const projectLinks = screen.getAllByRole("link", { name: /view projects/i });
    expect(projectLinks.length).toBeGreaterThan(0);
    for (const link of projectLinks) {
      expect(link).toHaveAttribute("href", "#projects");
    }
    expect(screen.getAllByText("Contact").length).toBeGreaterThan(0);
  });
});
