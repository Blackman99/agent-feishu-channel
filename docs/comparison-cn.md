# 选型对照（中文）— agent-feishu-channel vs 同类

**用途：** README / 即刻 / Linux.do / 飞书生态帖的「为什么选它」附表。  
**原则：** 诚实；承认大仓优势；不虚报星数；不把 slash 命令数量当差异化。  
**对照日：** 2026-09（星数会变，发帖前请再查 GitHub）。

**本仓库 P0 叙事：** Setup + Service + 中文文档；差异化 = **更轻量 + 飞书权限审批卡 + MCP**。

---

## 一句话各自是什么

| 项目 | 一句话 |
|------|--------|
| **[agent-feishu-channel](https://github.com/Blackman99/agent-feishu-channel)** | 飞书 / Lark 群里跑 Claude + Codex：WebSocket 服务、权限审批卡、会话持久化、config 挂 MCP；CLI `afc`。 |
| **[lark-channel-bridge](https://github.com/zarazhangrui/lark-coding-agent-bridge)**（npm `lark-channel-bridge`） | 飞书 ↔ 本机 Claude Code / Codex 的轻量桥；扫码绑定 PersonalAgent，流式卡片、多工作区等；社区热度高（约 **2.3k–2.5k★** 量级，以 GitHub 为准）。 |
| **[botmux](https://github.com/deepcoldy/botmux)** | 会话编排 daemon：为会话 spawn CLI 进程，飞书卡片 + 可交互 Web 终端；**20+** CLI/Agent 适配，不重造 agent 能力。 |
| **[cc-connect](https://github.com/chenhg5/cc-connect)** | 本地 coding 助手 ↔ **多 IM**（飞书、钉钉、Telegram、Slack、企微、个人微信 ilink 等）的连接器；飞书有 QR / setup CLI。社区热度约 **~1.5万★ / ~15k★ 量级**（开源对标 ≈15450；**发帖前再核**，勿捏造精确实时星数）。 |

---

## 选型总表（诚实）

| 维度 | agent-feishu-channel | lark-channel-bridge | botmux | cc-connect |
|------|----------------------|---------------------|--------|------------|
| **主场景** | 飞书群内双 provider coding agent 服务 | 飞书 / Lark ↔ Claude/Codex 桥，上手极快 | 多 CLI 投影到飞书 + 编排 / 终端 | 跨多个聊天平台接 agent |
| **平台面** | 飞书 / Lark（专深） | 飞书 / Lark（专深） | 飞书 / Lark（编排向） | **多平台**（飞书只是其一） |
| **Agent 覆盖** | Claude + Codex | Claude + Codex | **20+**（Claude、Codex、Gemini、Cursor、OpenCode…） | 以 Claude Code 等为主，视配置 / 生态 |
| **上手路径** | 开放平台建 Bot → `afc init` → 填 toml → `afc` | **扫码 PersonalAgent** 向导，配置写入 `~/.lark-channel/` | `botmux setup` / `start`，适配器注册表 | `cc-connect feishu setup` 等，toml 多平台 |
| **权限模型** | **PermissionBroker → 飞书交互审批卡**（超时可配） | 有权限/管理模式与管理命令（实现路径不同） | 多依赖 **CLI 原生权限**；卡片 / Web 终端可接管 | PermissionRequest hooks 等（平台侧能力因通道而异） |
| **MCP** | **`[[mcp]]` 写入 config**（stdio / sse） | 以该仓文档 / 版本为准；非本仓卖点 | 刻意不重造 MCP / 记忆层，跟 CLI 走 | 通常走 Claude Code / 项目侧 MCP |
| **会话** | 持久化 + 崩溃恢复；`/resume`、`/sessions` | 按聊天 / 话题 / 文档评论隔离；队列与合并 | tmux 等持久化；话题级进程；`/relay` 等 | 项目 / 平台会话模型；飞书可 thread 隔离 |
| **交互形态** | 流式卡片、thinking、tool、**审批卡** | 流式卡片、COT 过程消息、卡片按钮 | 卡片 + **Web 终端**（可写） | 卡片 / 进度样式可配；跨平台体验不一 |
| **体量 / 复杂度** | **刻意轻**：服务稳优先，命令是附属 | 能力面宽、社区大，运维与功能都更多 | **偏重**：daemon + 多适配器 + 终端投影 | 平台矩阵大，配置面宽 |
| **双 provider 切换** | 会话内 `/provider` | profile / agent 选择（可多 bot） | 多 bot @ 路由 / `cliId` | 项目与平台维度配置 |
| **中文文档** | **本仓 P0：补齐 ZH README / 落地文案** | 中英都较完整（社区向） | 中文 README / 文档站点强 | 飞书等中文指南较全 |
| **许可证** | MIT | MIT | 以仓库为准 | 以仓库为准 |
| **何时选它** | 只要飞书、要轻、要审批卡可见、要 MCP 进配置 | 要最快扫码跑通、要成熟社区与功能密度 | 要很多 CLI、要终端级接管与编排 | 要同时服务飞书以外多个 IM |

---

## 怎么讲差异（给发帖用）

### vs lark-channel-bridge（~2.5k★）

- **先认输的地方：** 对方社区更大、扫码上手更快、功能面与 issue 讨论更密。  
- **我们的切口：** 不是「命令更多」，而是 **更轻的飞书常驻服务** + **权限审批卡作为一等公民** + **MCP 写进 config**。  
- **禁忌：** 「吊打 bridge」「官方替代」——假且招骂。

### vs botmux

- **先认输的地方：** 适配器数量、Web 终端、多 bot 互怼 / 编排，本仓不做也不装做。  
- **我们的切口：** 不做「投影终端的编排器」，做 **SDK 路径上的飞书权限经纪 + 双 provider 会话服务**。  
- **一句话：** botmux = 站在 CLI 肩膀上编排；AFC = 飞书里把审批与 MCP 接进可控服务。

### vs cc-connect（~1.5万★ / ~15k★ 量级；发帖前再核）

- **先认输的地方：** 多 IM 一张网，飞书只是入口之一；企业要钉钉/企微/TG 同栈时对方更合适。社区量级远大于本仓。  
- **我们的切口：** **飞书专深**（卡片审批、会话、MCP），不扩平台矩阵。  
- **一句话：** 要跨平台选 cc-connect；要飞书里把 coding agent 权限卡做好选 AFC。

---

## 不该出现在对照里的话

- 「星少所以更精品」——星数 ≠ 质量；早期就说早期。  
- 「命令最多 / slash 最全」——与 P0 叙事相反。  
- 捏造对方缺权限、缺会话、缺卡片——对方 README 已写明的能力必须承认。  
- 把 PersonalAgent 扫码说成「不安全」或把开放平台凭证说成「过时」——两条路径都合法，场景不同。

---

## 推荐结论句（可直接贴）

> 已经在用 lark-channel-bridge / botmux / cc-connect 且满意，不必为换而换。  
> 若你的痛点是：**只要飞书、服务要轻、敏感操作必须在群里点批准、还想把 MCP 写进配置** —— 可以试 **agent-feishu-channel**（`npm i -g agent-feishu-channel` → `afc init` → `afc`）。

站点：https://blackman99.github.io/agent-feishu-channel/  
仓库：https://github.com/Blackman99/agent-feishu-channel  
