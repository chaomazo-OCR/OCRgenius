<div align="center">

# OCRgenius

### Document intelligence for freight

Turn bills of lading, CMRs, invoices, packing lists, and customs paperwork into data your operation can trust.

[Visit OCRgenius](https://ocrgenius.web.id/) · [Report a bug](https://github.com/jamiepadolm/OCRgenius/issues/new) · [Request a feature](https://github.com/jamiepadolm/OCRgenius/issues/new)

[![Website](https://img.shields.io/badge/website-ocrgenius.web.id-c9a468?style=for-the-badge)](https://ocrgenius.web.id/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-149ECA?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![License](https://img.shields.io/badge/license-MIT-2ea44f?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/status-building-f0b429?style=for-the-badge)](#roadmap)

</div>

---

## The short version

Freight does not move on clean, predictable templates. It moves on scans, photos, stamps, handwriting, revised layouts, and documents that arrive when someone is already under pressure.

**OCRgenius is built to read that reality.** It extracts the useful facts, validates what matters, makes uncertainty visible, and delivers structured output to the systems that already run the operation.

> **Paperwork in. Clarity out.**

## Why OCRgenius

| The operational problem | The OCRgenius approach | The result |
| --- | --- | --- |
| Documents change layout from shipper to shipper | Read fields in context instead of relying on fixed coordinates | More resilient extraction |
| A single bad value can create downstream work | Score confidence field by field | Human review where it matters |
| Clean data still needs to reach the right system | Map output to existing schemas and workflows | Faster handoff to ERP, TMS, and WMS |
| Operations teams cannot replace every workflow at once | Start with REST, webhooks, SFTP, or export files | Adoption without a rip-and-replace project |

## Core capabilities

- **Context-aware extraction** — identify parties, references, weights, dates, line items, and other fields wherever they appear on a document.
- **Confidence-aware validation** — route uncertain values to review instead of presenting guesses as facts.
- **Messy-document support** — design for handwriting, stamps, signatures, skewed photos, faxes, and imperfect scans.
- **Schema-ready output** — return JSON, CSV, or Excel mapped to the shape your team needs.
- **Operational integrations** — connect through REST API, webhooks, SFTP, or purpose-built ERP, TMS, and WMS connectors.
- **Privacy by design** — keep customer documents isolated and out of shared model training workflows.

## How it works

### 1. Drop in a document

Send a bill of lading, CMR, commercial invoice, packing list, customs form, or another document from the freight workflow.

### 2. Understand the context

OCRgenius interprets the page as a document, not just a grid of pixels. Fields can move, labels can vary, and the useful value can sit beside a stamp or handwritten note.

### 3. Validate each value

Every extracted field can be scored against confidence thresholds and business rules. Anything uncertain becomes visible to a reviewer.

### 4. Deliver clean data

Return validated output to the system that needs it: your ERP, TMS, WMS, data pipeline, or review queue.

## Product surface

The public experience is designed around a calm, editorial interface that feels dependable beside a busy logistics workflow. The current landing page communicates:

- A clear freight-document intelligence proposition
- A visual document-processing flow
- Confidence and validation as first-class concepts
- Integration paths for existing logistics systems
- A lightweight pilot request experience

Explore the live experience at [ocrgenius.web.id](https://ocrgenius.web.id/).

## Repository structure

This repository is a TypeScript workspace containing the public product experience and the foundation for future integrations.

| Path | Purpose |
| --- | --- |
| artifacts/mockup-sandbox | React and Vite landing experience for OCRgenius |
| artifacts/api-server | Express service foundation with health routing |
| lib/api-spec | OpenAPI source of truth for the service contract |
| lib/api-zod | Generated Zod schemas and API types |
| lib/api-client-react | Generated React client helpers |
| lib/db | Database configuration and schema foundation |
| scripts | Workspace utilities and maintenance scripts |

## Technology

- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **Backend foundation:** Node.js, Express, Pino
- **Contracts:** OpenAPI, Orval, Zod
- **Data layer:** PostgreSQL and Drizzle ORM
- **Workspace:** pnpm monorepo

## Getting started

### Requirements

- Node.js 20 or newer
- pnpm

### Install and run the landing experience

    pnpm install
    PORT=5173 BASE_PATH=/ pnpm --filter @workspace/mockup-sandbox run dev

Then open the local URL printed by Vite.

### Build and type-check

    pnpm run typecheck
    pnpm run build

The workspace expects PORT and BASE_PATH when starting the Vite experience. The API service also expects PORT when it is run directly.

## Engineering principles

1. **Make uncertainty visible.** A review queue is better than a confident-looking guess.
2. **Design for the real document.** Freight paperwork is varied, physical, and imperfect.
3. **Integrate before replacing.** Existing systems contain valuable operational context.
4. **Keep the interface calm.** Critical information should be easy to scan under pressure.
5. **Protect customer data.** Documents and credentials do not belong in source control.

## Roadmap

- [x] OCRgenius product positioning and public landing experience
- [x] Document-processing workflow narrative
- [x] Confidence-aware review concept
- [x] Logistics integration direction
- [ ] Document upload and extraction API
- [ ] Field-level validation and review queue
- [ ] Configurable customer schemas
- [ ] Webhook and SFTP delivery flows
- [ ] ERP, TMS, and WMS connector library
- [ ] Operational analytics and extraction-quality reporting

The roadmap is intentionally outcome-focused. Implementation details may change as real freight workflows shape the product.

## Security and privacy

Never commit API keys, credentials, customer documents, or private operational data. Use environment variables for local and deployed configuration.

For a vulnerability report, follow the private process in [SECURITY.md](SECURITY.md). For a general issue, use the repository issue templates.

## Contributing

Ideas, fixes, documentation improvements, accessibility work, and integration proposals are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

For larger changes, open an issue first and describe the workflow, the user who benefits, and how success should be measured.

## License

OCRgenius is released under the [MIT License](LICENSE).

<div align="center">

**Document intelligence for the freight workflows that keep the world moving.**

[Website](https://ocrgenius.web.id/) · [GitHub issues](https://github.com/jamiepadolm/OCRgenius/issues) · [Contact](mailto:hello@ocr-genius.com)

</div>
