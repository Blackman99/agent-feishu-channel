# Comparison / Why choose AFC

**Chinese:** [docs/comparison-cn.md](https://github.com/Blackman99/agent-feishu-channel/blob/main/docs/comparison-cn.md) · **English:** [docs/comparison.md](https://github.com/Blackman99/agent-feishu-channel/blob/main/docs/comparison.md)

Honest peer contrast for README / posts. **Differentiate as Feishu-specialized + permission approval cards + MCP** — not as a cross-IM connector, and **never** on slash-command count. Stars move; **re-check before posting**.

Site: https://blackman99.github.io/agent-feishu-channel/  
Repo: https://github.com/Blackman99/agent-feishu-channel

---

## One-liner table

| Project | One-liner |
|---------|-----------|
| **[agent-feishu-channel](https://github.com/Blackman99/agent-feishu-channel)** | Claude + Codex in Feishu / Lark: WebSocket service, permission approval cards, session persistence, MCP in config; CLI `afc`. |
| **[lark-channel-bridge](https://github.com/zarazhangrui/lark-coding-agent-bridge)** | Feishu ↔ local Claude/Codex bridge; QR PersonalAgent; **~2.3k–2.5k★** magnitude. |
| **[botmux](https://github.com/deepcoldy/botmux)** | Session orchestration daemon; Feishu cards + Web terminal; **20+** CLI adapters. |
| **[cc-connect](https://github.com/chenhg5/cc-connect)** | Local coding assistant ↔ **multi-IM** (Feishu, DingTalk, Telegram, Slack, WeCom, …). **~15k★ magnitude** (≈15450 from 开源对标 — **re-check before posting**). |

---

## Honest matrix (summary)

| Axis | AFC | lark-channel-bridge | botmux | cc-connect |
|------|-----|---------------------|--------|------------|
| **Scene** | Feishu dual-provider coding service | Fast Feishu ↔ Claude/Codex bridge | Multi-CLI orchestration + terminal | Cross-IM agent connector |
| **Platform** | Feishu / Lark specialized | Feishu / Lark specialized | Feishu orchestration | **Multi-platform** |
| **Permissions** | **Feishu interactive approval cards** | Permission/admin modes (different path) | Often CLI-native + cards/terminal | Hooks vary by channel |
| **MCP** | **`[[mcp]]` in config** | Per their docs | Follows CLI; no rebuilt MCP layer | Usually Claude Code / project MCP |
| **Weight** | Intentionally light | Broad surface, large community | Heavier daemon | Wide platform matrix |
| **Pick when** | Feishu-only, light, approval cards, MCP in config | Fastest QR + feature density | Many CLIs + terminal takeover | Need IMs beyond Feishu |

---

## How to talk differences

- **vs bridge (~2.5k★):** concede community & QR speed; our cut = lighter service + first-class approval cards + MCP in config. Never “destroys bridge.”
- **vs botmux:** concede adapters & Web terminal; our cut = Feishu permission broker + dual-provider session service, not a terminal orchestrator.
- **vs cc-connect (~15k★):** concede multi-IM mesh; our cut = **Feishu-specialized** — do not expand platform matrix.

## Forbidden claims

- Competing on slash-command count  
- Inventing peer gaps their README already documents  
- “Fewer stars = more boutique”  
- Exact live star counts without re-checking GitHub

## Recommended closing

> Already happy with lark-channel-bridge / botmux / cc-connect? No need to switch for switching’s sake.  
> If your pain is **Feishu-only, keep the service light, require in-group approve for sensitive tools, and want MCP in config** — try **agent-feishu-channel** (`npm i -g agent-feishu-channel` → `afc init` → `afc`).

Full tables and post phrasing: keep [docs/comparison.md](https://github.com/Blackman99/agent-feishu-channel/blob/main/docs/comparison.md) and [docs/comparison-cn.md](https://github.com/Blackman99/agent-feishu-channel/blob/main/docs/comparison-cn.md) in sync with this page’s framing.
