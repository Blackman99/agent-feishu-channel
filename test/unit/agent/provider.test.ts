import { describe, expect, it } from "vitest";
import { defaultModelForProvider, getProviderDefaults } from "../../../src/agent/manager.js";

const CONFIG: Parameters<typeof getProviderDefaults>[0] &
  Parameters<typeof defaultModelForProvider>[1] = {
  agent: {
    defaultProvider: "claude",
    defaultCwd: "/tmp/cfc-test",
    defaultPermissionMode: "default",
    permissionTimeoutMs: 300_000,
    permissionWarnBeforeMs: 60_000,
  },
  claude: {
    defaultModel: "claude-opus-4-6",
    defaultEffort: "high",
    cliPath: "claude",
    defaultCwd: "/tmp/cfc-test",
    defaultPermissionMode: "default",
    permissionTimeoutMs: 300_000,
    permissionWarnBeforeMs: 60_000,
  },
  codex: {
    defaultModel: "gpt-5.5",
    defaultEffort: "high",
    defaultPermissionMode: "plan",
    cliPath: "codex",
  },
};

describe("agent provider helpers", () => {
  it("returns the configured default model for each provider", () => {
    expect(defaultModelForProvider("claude", CONFIG)).toBe("claude-opus-4-6");
    expect(defaultModelForProvider("codex", CONFIG)).toBe("gpt-5.5");
  });

  it("returns shared provider defaults from the neutral agent config", () => {
    expect(getProviderDefaults(CONFIG)).toEqual({
      provider: "claude",
      cwd: "/tmp/cfc-test",
      permissionMode: "default",
    });
  });
});
