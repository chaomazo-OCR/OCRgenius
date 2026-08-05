# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| 1.x     | ✅ |
| < 1.0   | ❌ |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

If you discover a security vulnerability in SentryLLM, please report it by emailing **security@sentryllm.xyz**.

Include as much detail as possible:

- A description of the vulnerability and its potential impact
- Steps to reproduce the issue
- Any proof-of-concept code (if applicable)
- Your suggested fix (optional)

We will acknowledge your report within **48 hours** and aim to provide a fix within **7 days** for critical issues.

We follow responsible disclosure — we will credit you in the release notes unless you prefer to remain anonymous.

## Security Best Practices for SentryLLM Users

- Never commit your `SENTRY_LLM_KEY` to source control — use environment variables
- Rotate your API key if you suspect it has been exposed
- Use the `strict` policy in production environments
- Enable alerting so you are notified of threats in real time
- Review the threat dashboard regularly at [sentryllm.xyz](http://www.sentryllm.xyz/)
