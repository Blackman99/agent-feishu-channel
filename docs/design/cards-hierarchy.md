# Card information hierarchy — agent-feishu-channel

**Asset:** `cards-hierarchy.png`  
**Brand:** bg `#0F172A` · Feishu blue `#3370FF` · text `#F1F5F9` / `#94A3B8`  
**Audience:** 产品宣发 · Github 开发专员（design spec, not live screenshot）

## Unified stack (all card types)

| Layer | Role | Visual cue |
|-------|------|------------|
| **1 Title** | What this card is | Bold `#F1F5F9`, left accent `#3370FF` |
| **2 Status** | Live state | Stream pulse / permission chip / help idle |
| **3 Body** | Payload | Thinking, tool rows, command preview, or command list |
| **4 Actions** | Next step | Interrupt/queue · Approve/Deny · Docs/Dismiss |

## Type differentiation

| Type | Stripe / badge | Status language | Primary action |
|------|----------------|-----------------|----------------|
| **STREAM** | Blue `#3370FF` | Streaming · thinking | `! Interrupt`, Queue — **no** Approve |
| **PERMISSION** | Coral `#F87171` | Awaiting you · timeout | **Approve** (blue) / **Deny** (danger stroke) |
| **HELP** | Slate `#94A3B8` | Idle · docs snapshot | Open docs / Dismiss — never Approve/Deny |

## Copy / honesty notes

- Permission cards are the P0 demo for 即刻 / 飞书生态：敏感 tool → 点批准/拒绝。
- Do not recommend `bypassPermissions` as default for shared groups.
- Streaming cards emphasize service traits: thinking blocks, tool activity, queue/`!`.
- Help stays calm and dense — reference, not urgency chrome.

## Related deliverables

- `afc-setup-steps.png` + `setup-frames/` — terminal wizard states
- `streaming-card-zh.png` / `approval-card-zh.png` — 中文站产品示意
