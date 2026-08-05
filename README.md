# SentryLLM

**Real-time AI security monitoring for LLM-powered applications.**

[![Website](https://img.shields.io/badge/website-sentryllm.xyz-blue?style=flat-square)](http://www.sentryllm.xyz/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Status](https://img.shields.io/badge/status-active-brightgreen?style=flat-square)]()

---

> **SentryLLM** watches your AI systems in production — detecting prompt injection, jailbreaks, data exfiltration attempts, and anomalous behavior before they cause damage.

---

## What it does

Modern LLM applications are a new attack surface most teams aren't watching. SentryLLM instruments your AI pipeline and tells you what's happening in real time:

- **Prompt Injection Detection** — catches attempts to override system instructions via user input or tool results
- **Jailbreak Pattern Matching** — identifies known and novel bypass attempts before the model responds
- **Behavioral Anomaly Analysis** — flags statistical deviations in model output that signal misuse
- **Data Exfiltration Alerts** — monitors responses for PII leakage, credential exposure, or internal data spillage
- **Multi-turn Attack Tracing** — correlates sessions to detect slow-burn grooming and trust escalation attacks
- **Real-time Dashboard** — live feed of threats, severity scores, and affected sessions at [sentryllm.xyz](http://www.sentryllm.xyz/)

---

## How it works

```
Your App → SentryLLM SDK → LLM Provider
                ↓
         Analysis Engine
         ┌─────────────────────────────────┐
         │  Prompt Inspector               │
         │  Behavioral Classifier          │
         │  Output Scanner                 │
         │  Session Correlator             │
         └─────────────────────────────────┘
                ↓
         Alert / Block / Log
                ↓
         Dashboard (sentryllm.xyz)
```

SentryLLM sits between your app and the LLM. It inspects every request and response, scores risk in milliseconds, and either logs the finding, triggers an alert, or blocks the call depending on your policy.

---

## Quick Start

```bash
npm install sentryllm
# or
bun add sentryllm
```

```typescript
import { SentryLLM } from "sentryllm";

const sentry = new SentryLLM({
  apiKey: process.env.SENTRY_LLM_KEY,
  policy: "strict",           // strict | moderate | monitor-only
  onThreat: (event) => {
    console.log(`[${event.severity}] ${event.type}: ${event.summary}`);
  },
});

// Wrap your LLM call
const response = await sentry.wrap(async () => {
  return await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: userInput }],
  });
});
```

That's it. Every call is now monitored.

---

## Detection Categories

| Category | Description | Severity |
|----------|-------------|----------|
| `PROMPT_INJECTION` | User input overriding system prompt | Critical |
| `INDIRECT_INJECTION` | Instructions hidden in documents or tool output | Critical |
| `JAILBREAK_ATTEMPT` | Known bypass patterns (DAN, roleplay, etc.) | High |
| `PII_LEAKAGE` | Personal data in model response | High |
| `CREDENTIAL_EXPOSURE` | Keys, tokens, or secrets in output | Critical |
| `BEHAVIORAL_ANOMALY` | Statistical deviation from baseline | Medium |
| `TRUST_ESCALATION` | Multi-turn grooming behavior | High |
| `TOOL_HIJACKING` | Malicious function call manipulation | Critical |
| `DATA_EXFILTRATION` | Structured data extraction attempt | High |
| `POLICY_VIOLATION` | Response violates your defined rules | Medium |

---

## Configuration

```typescript
const sentry = new SentryLLM({
  apiKey: "slm-...",

  // Detection policy
  policy: {
    promptInjection: "block",       // block | alert | log
    jailbreak: "block",
    piiLeakage: "alert",
    behavioralAnomaly: "log",
    toolHijacking: "block",
  },

  // Scope
  scanInput: true,
  scanOutput: true,
  scanToolCalls: true,

  // Session tracking
  sessionId: () => req.user.id,      // tie events to a user/session

  // Baseline
  baselineWindow: "7d",              // learn normal behavior over 7 days
});
```

---

## SDK Reference

### `sentry.wrap(fn)`

Wrap any async LLM call. Returns the original response if safe, throws or alerts on threat.

### `sentry.scan(text, role?)`

Scan an arbitrary string. Returns a `ScanResult` with `{ safe, findings, score }`.

### `sentry.session(id)`

Create a scoped monitor for a specific session. Enables multi-turn attack correlation.

```typescript
const session = sentry.session(userId);
const result = await session.wrap(() => llmCall(messages));
```

### `sentry.baseline()`

Force a baseline recalculation from recent traffic.

---

## Dashboard

Visit **[sentryllm.xyz](http://www.sentryllm.xyz/)** for:

- Live threat feed across all instrumented apps
- Session replay for any flagged interaction
- Trend charts by threat category, severity, and app
- Policy management (no code changes required)
- Alerting via Slack, PagerDuty, webhook, or email
- Compliance exports (SOC 2, audit logs)

---

## Tech Stack

| Component | Technology |
|-----------|------------|
| SDK | TypeScript / Node.js |
| Analysis Engine | Multi-model ensemble + rule engine |
| Realtime Transport | WebSocket + Server-Sent Events |
| Dashboard | React + Next.js |
| Storage | PostgreSQL + Redis |
| Deployment | Edge-native (Cloudflare Workers compatible) |

---

## Threat Model

SentryLLM is designed against the [OWASP LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/):

| OWASP LLM | Coverage |
|-----------|----------|
| LLM01 – Prompt Injection | Full |
| LLM02 – Insecure Output Handling | Full |
| LLM03 – Training Data Poisoning | Partial |
| LLM06 – Sensitive Information Disclosure | Full |
| LLM07 – Insecure Plugin Design | Full |
| LLM08 – Excessive Agency | Full |
| LLM09 – Overreliance | Monitoring |

---

## Roadmap

- [x] Prompt injection detection (v1)
- [x] Output scanning for PII/credentials
- [x] Real-time dashboard
- [ ] Fine-tuned open-source detection model
- [ ] OpenTelemetry integration
- [ ] LangChain / LlamaIndex native plugins
- [ ] On-premise deployment (air-gapped)
- [ ] Automated red-teaming from findings

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first.

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'feat: add your feature'`)
4. Push and open a PR

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## Security

Found a vulnerability? Please report it privately — see [SECURITY.md](SECURITY.md).

---

## License

MIT — see [LICENSE](LICENSE)

---

<p align="center">
  <a href="http://www.sentryllm.xyz/">sentryllm.xyz</a> &nbsp;·&nbsp;
  <a href="https://github.com/Sentry-LLM/SentryLLM/issues">Issues</a> &nbsp;·&nbsp;
  <a href="https://github.com/Sentry-LLM/SentryLLM/discussions">Discussions</a>
</p>
