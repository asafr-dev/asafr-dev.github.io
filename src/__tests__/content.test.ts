import { describe, it, expect } from "vitest";
import { projects, profile } from "@/content";

describe("content", () => {
  it("has basic profile fields", () => {
    expect(profile.name.length).toBeGreaterThan(0);
    expect(profile.email).toContain("@");
  });

  it("has at least 3 projects", () => {
    expect(projects.length).toBeGreaterThanOrEqual(3);
  });
});
