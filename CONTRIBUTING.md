# Contributing to SentryLLM

Thank you for your interest in contributing! SentryLLM is an open project and we welcome contributions of all kinds — bug reports, feature requests, documentation improvements, and code.

## Getting Started

1. **Fork** the repository and clone your fork
2. **Install** dependencies: `npm install` or `bun install`
3. **Create a branch**: `git checkout -b feature/your-feature-name`
4. **Make your changes** and add tests where applicable
5. **Run tests**: `npm test`
6. **Commit** using [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat: add new detection category`
   - `fix: correct false positive in injection scanner`
   - `docs: update quickstart example`
7. **Open a Pull Request** against `main`

## What to Contribute

### Good First Issues

Look for issues labeled [`good first issue`](https://github.com/Sentry-LLM/SentryLLM/issues?q=label%3A%22good+first+issue%22) — these are scoped tasks ideal for first-time contributors.

### Areas We Welcome Help

- **New detection patterns** — if you've found a novel prompt injection technique, open an issue or PR with the pattern
- **SDK integrations** — LangChain, LlamaIndex, Haystack, AutoGen, CrewAI plugins
- **Language SDKs** — Python, Go, Ruby ports
- **Documentation** — examples, tutorials, translations
- **Tests** — more coverage is always welcome

## Code Standards

- TypeScript with strict mode enabled
- All public APIs must have JSDoc comments
- New detection rules need a test case that demonstrates both a true positive and a true negative
- No console.log in production code — use the internal logger

## Pull Request Guidelines

- Keep PRs focused — one feature or fix per PR
- Include a clear description of what changed and why
- Link to any related issues
- Add or update tests
- Update documentation if the API changed

## Issue Reporting

When reporting a bug, please include:
- SentryLLM version
- Node.js / Bun version
- Minimal reproduction case
- Expected vs actual behavior

For security vulnerabilities, see [SECURITY.md](SECURITY.md).

## Community

- **Discussions**: [GitHub Discussions](https://github.com/Sentry-LLM/SentryLLM/discussions)
- **Issues**: [GitHub Issues](https://github.com/Sentry-LLM/SentryLLM/issues)
- **Website**: [sentryllm.xyz](http://www.sentryllm.xyz/)

We are committed to maintaining an inclusive and respectful community. All contributors are expected to follow our Code of Conduct.
