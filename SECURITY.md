# Security Policy

## Supported versions

| Version | Supported |
| --- | --- |
| 1.x | Yes |
| < 1.0 | No |

## Reporting a vulnerability

Please do not report security vulnerabilities through public issues. Email security@ocr-genius.com with a description, impact, reproduction steps, and proof of concept if applicable.

We acknowledge reports within 48 hours and aim to address critical issues within 7 days. We follow responsible disclosure and credit reporters in release notes unless they prefer anonymity.

## Secure handling principles

- Never commit credentials, API keys, or customer documents.
- Keep document processing isolated from unrelated workloads.
- Treat low-confidence extraction as a review event, not an automatic success.
- Use environment variables for local and deployed configuration.
