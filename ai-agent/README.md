# QA Copilot — AI Agent Master Project

## What it does
An end-to-end QA Copilot that:
1. **Generates** test cases from requirements documents (using Anthropic API)
2. **Executes** those tests via Playwright
3. **Reports** results in structured Allure reports
4. **Triages** failures using AI — probable cause + fix suggestion

## Architecture (built across 45 days)
- Phase 1-2: Core Playwright framework (the runner)
- Phase 3:   POM framework (the structure)
- Phase 4:   API testing layer
- Phase 5:   CI/CD pipeline (auto-trigger)
- Phase 6:   AI generation + triage engine (Anthropic API)
- Phase 7:   Full integration + portfolio demo

## Tech
- Playwright TypeScript
- Anthropic Claude API (claude-sonnet-4-6)
- GitHub Actions
- Allure Reporting
- Node.js