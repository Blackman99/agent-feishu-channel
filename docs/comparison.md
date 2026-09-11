# Comparison (English) — agent-feishu-channel vs peers

**Chinese version:** [comparison-cn.md](comparison-cn.md)

**Use:** README / social / Feishu-ecosystem posts — the “why this vs peers” appendix.  
**Rules:** Be honest; acknowledge larger repos’ strengths; do not invent star counts; **never** differentiate on slash-command count.  
**Check date:** 2026-09 (stars move — **re-check on GitHub before posting**).

**This repo’s P0 narrative:** Setup + Service + docs; differentiate as **lighter Feishu-specialized service + permission approval cards + MCP** — **not** as a cross-IM connector, and **not** by stacking more slash commands.

Site: https://blackman99.github.io/agent-feishu-channel/  
Repo: https://github.com/Blackman99/agent-feishu-channel

---

## One-liner: what each is

| Project | One-liner |
|---------|-----------|
| **[agent-feishu-channel](https://github.com/Blackman99/agent-feishu-channel)** | Claude + Codex in Feishu / Lark groups: WebSocket service, permission approval cards, session persistence, MCP via config; CLI `afc`. |
| **[lark-channel-bridge](https://github.com/zarazhangrui/lark-coding-agent-bridge)** (npm `lark-channel-bridge`) | Lightweight Feishu ↔ local Claude Code / Codex bridge; QR PersonalAgent bind, streaming cards, multi-workspace; high community heat (**~2.3k–2.5k★** magnitude — verify on GitHub). |
| **[botmux](https://github.com/deepcoldy/botmux)** | Session orchestration daemon: spawns CLI processes per session, Feishu cards + interactive Web terminal; **20+** CLI/agent adapters — does not reinvent agent cores. |
| **[cc-connect](https://github.com/chenhg5/cc-connect)** | Local coding assistant ↔ **multi-IM** connector (Feishu, DingTalk, Telegram, Slack, WeCom, personal WeChat ilink, …); Feishu has QR / setup CLI. Community heat **~15k★ magnitude** (≈15450 from 开源对标 — **re-check before posting**; do not invent an exact live count). |

---

## Honest matrix

| Axis | agent-feishu-channel | lark-channel-bridge | botmux | cc-connect |
|------|----------------------|---------------------|--------|------------|
| **Primary scene** | Dual-provider coding agent service inside Feishu groups | Feishu / Lark ↔ Claude/Codex bridge; very fast onboarding | Many CLIs projected to Feishu + orchestration / terminal | Agents connected across many chat platforms |
| **Platform surface** | Feishu / Lark (specialized) | Feishu / Lark (specialized) | Feishu / Lark (orchestration-oriented) | **Multi-platform** (Feishu is one of many) |
| **Agent coverage** | Claude + Codex | Claude + Codex | **20+** (Claude, Codex, Gemini, Cursor, OpenCode…) | Claude Code–centric, depends on config / ecosystem |
| **Onboarding** | Open Platform bot → `afc init` → fill toml → `afc` | **QR PersonalAgent** wizard; config under `~/.lark-channel/` | `botmux setup` / `start`, adapter registry | `cc-connect feishu setup` etc.; multi-platform toml |
| **Permission model** | **PermissionBroker → Feishu interactive approval cards** (timeouts configurable) | Has permission / admin modes and admin commands (different path) | Often leans on **CLI-native permissions**; cards / Web terminal can take over | PermissionRequest hooks etc. (varies by channel) |
| **MCP** | **`[[mcp]]` in config** (stdio / sse) | Per that repo’s docs / version; not their headline | Deliberately does not rebuild MCP / memory; follows the CLI | Usually via Claude Code / project-side MCP |
| **Sessions** | Persistence + crash recovery; `/resume`, `/sessions` | Isolated by chat / topic / doc comments; queues & merge | tmux-style persistence; topic-level processes; `/relay` etc. | Project / platform session model; Feishu can isolate by thread |
| **Interaction** | Streaming cards, thinking, tools, **approval cards** | Streaming cards, CoT process messages, card buttons | Cards + **writable Web terminal** | Cards / progress styles configurable; cross-platform UX varies |
| **Weight / complexity** | **Intentionally light**: service stability first; commands are secondary | Broad surface, large community; more ops + features | **Heavier**: daemon + many adapters + terminal projection | Large platform matrix; wide config surface |
| **Dual-provider switch** | In-session `/provider` | profile / agent selection (multi-bot possible) | Multi-bot @ routing / `cliId` | Project + platform config |
| **Chinese docs** | **This repo P0: ZH README / landing copy** | Strong EN/ZH (community) | Strong ZH README / docs site | Solid Feishu ZH guides |
| **License** | MIT | MIT | Check repo | Check repo |
| **When to pick it** | Feishu-only, want light + visible approval cards + MCP in config | Fastest QR path, mature community & feature density | Many CLIs, terminal-grade takeover & orchestration | Must serve IMs beyond Feishu on one stack |

---

## How to talk about differences (for posts)

### vs lark-channel-bridge (~2.3k–2.5k★ magnitude)

- **Concede first:** larger community, faster QR onboarding, denser features and issue discussion.  
- **Our cut:** not “more commands” — a **lighter Feishu long-running service** + **permission approval cards as first-class** + **MCP written into config**.  
- **Forbidden:** “destroys bridge”, “official replacement” — false and hostile.

### vs botmux

- **Concede first:** adapter count, Web terminal, multi-bot orchestration — we don’t build those and don’t pretend to.  
- **Our cut:** not a “terminal projector / orchestrator”; an **SDK-path Feishu permission broker + dual-provider session service**.  
- **One line:** botmux stands on CLI shoulders to orchestrate; AFC makes approval + MCP controllable inside Feishu.

### vs cc-connect (~15k★ magnitude ≈15450 — re-check before posting)

- **Concede first:** one multi-IM mesh; Feishu is only one entry. If the org needs DingTalk / WeCom / Telegram on the same stack, they win.  
- **Our cut:** **Feishu-specialized** (card approvals, sessions, MCP) — we do not expand the platform matrix.  
- **One line:** pick cc-connect for cross-IM; pick AFC to get coding-agent **permission cards** right inside Feishu.

---

## Forbidden claims

- “Fewer stars = more boutique” — stars ≠ quality; if early, say early.  
- “Most commands / fullest slash set” — opposite of the P0 narrative.  
- Inventing gaps (no permissions / no sessions / no cards) that their README already documents.  
- Calling PersonalAgent QR “insecure” or Open Platform credentials “obsolete” — both paths are valid for different scenes.

---

## Recommended closing sentence (paste-ready)

> Already happy with lark-channel-bridge / botmux / cc-connect? No need to switch for switching’s sake.  
> If your pain is **Feishu-only, keep the service light, require in-group approve for sensitive tools, and want MCP in config** — try **agent-feishu-channel** (`npm i -g agent-feishu-channel` → `afc init` → `afc`).

Site: https://blackman99.github.io/agent-feishu-channel/  
Repo: https://github.com/Blackman99/agent-feishu-channel
