# OCRgenius

Document intelligence for freight.

OCRgenius turns bills of lading, CMRs, invoices, packing lists, customs forms, and other logistics paperwork into validated data your operations can use.

Website: https://ocrgenius.web.id/

## What it does

- Reads changing layouts, handwriting, stamps, signatures, skewed photos, and poor scans.
- Routes low-confidence values to a review queue instead of silently passing them through.
- Maps output to JSON, CSV, or Excel and connects through REST, webhooks, SFTP, ERP, TMS, and WMS integrations.
- Processes customer documents in isolated environments without using them to train shared models.

## Repository contents

- artifacts/mockup-sandbox: responsive OCRgenius landing page built with React, Vite, and TypeScript.
- artifacts/api-server: small Express service with a health endpoint for future product integrations.
- lib/api-spec, lib/api-zod, and lib/api-client-react: API contract and generated helpers.

## Run locally

Requirements: Node.js 20+ and pnpm.

    pnpm install
    PORT=5173 BASE_PATH=/ pnpm --filter @workspace/mockup-sandbox run dev

Build and type-check with pnpm run typecheck and pnpm run build.

## Product direction

OCRgenius extracts useful facts from freight paperwork, makes uncertainty visible, and gets clean data into the systems that move cargo. The interface is calm, editorial, and high-contrast so it feels dependable beside busy logistics workflows.

See CONTRIBUTING.md for development workflow and SECURITY.md for private vulnerability reporting.

## License

MIT. See LICENSE.
