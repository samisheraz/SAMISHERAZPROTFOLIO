import { describe, expect, it } from "vitest";
import { profile, projects } from "@/data/portfolio";

describe("Portfolio factual constraints", () => {
  it("does not invent an email address", () => {
    expect(profile.email).toBe("");
  });
  it("uses the supplied LinkedIn profile", () => {
    expect(profile.linkedin).toBe("https://www.linkedin.com/in/abdul-sami-sheraz-86265b343");
  });
  it("uses the supplied GitHub profile", () => {
    expect(profile.github).toBe("https://github.com/samisheraz");
  });
  it("does not invent project links or real photographs", () => {
    expect(projects).toHaveLength(6);
    expect(
      projects.every((project) => !project.repository && !project.linkedinPost && !project.image),
    ).toBe(true);
  });
});
