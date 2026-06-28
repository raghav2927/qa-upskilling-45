# QA Upskilling — 45 Days to SDET

**Goal:** Transition from Manual QA to AI-powered SDET roles in Germany  
**Primary stack:** Playwright TypeScript · Anthropic API · GitHub Actions  
**Timeline:** 45 days | 90 hours | 7 phases  

---

## Master Project — QA Copilot AI Agent

An end-to-end AI Agent that:
1. **Generates** test cases from requirements documents (Anthropic API)
2. **Executes** those tests via Playwright
3. **Reports** results in structured Allure reports
4. **Triages** failures using AI — probable cause + fix suggestion

---

## Roadmap

| Phase | Days | Theme |
|-------|------|-------|
| 1 | 1–10 | Programming Foundations |
| 2 | 11–20 | Playwright & Web Automation |
| 3 | 21–28 | Test Framework (POM, Data-driven, Reporting) |
| 4 | 29–33 | API Testing |
| 5 | 34–38 | CI/CD & DevOps |
| 6 | 39–42 | GenAI for QA |
| 7 | 43–45 | Capstone & Portfolio |

---

## Progress

### Phase 1 — Programming Foundations

- [x] **Day 01** — Dev environment setup · GitHub repo · Hello World test · Playwright config
- [x] **Day 02** — Variables, data types, operators · 5 utility scripts · QA Copilot type contracts

### Phase 2 — Playwright & Web Automation
- [ ] Day 11 — HTML, CSS & DOM
- [ ] Day 12 — Playwright setup & first script
- [ ] ...

### Phase 3 — Test Framework
- [ ] Day 21 — Test runner & assertions
- [ ] ...

### Phase 4 — API Testing
- [ ] Day 29 — HTTP, REST & JSON
- [ ] ...

### Phase 5 — CI/CD & DevOps
- [ ] Day 34 — Git advanced
- [ ] ...

### Phase 6 — GenAI for QA
- [ ] Day 39 — Prompt engineering for QA
- [ ] ...

### Phase 7 — Capstone
- [ ] Day 43 — Performance testing intro
- [ ] Day 45 — Final portfolio + demo video

---

## Repo Structure

qa-upskilling-45/

├── .github/workflows/       ← CI/CD pipelines (Phase 5)

├── playwright/

│   ├── pages/               ← Page Object Models

│   ├── tests/               ← All test files

│   ├── fixtures/            ← Reusable test setup

│   ├── utils/               ← Helper functions

│   └── data/                ← Test data (CSV, JSON)

├── api/tests/               ← API test files

├── ai-agent/                ← QA Copilot master project

│   └── types.ts             ← Core data contracts

├── day01/                   ← Hello World test

├── day02/                   ← BMI, temperature, interest, age, tip scripts

├── reports/                 ← Allure/HTML reports

├── playwright.config.ts

├── tsconfig.json

└── README.md

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Playwright TypeScript | UI & API test automation |
| Anthropic Claude API | AI test generation & triage |
| GitHub Actions | CI/CD pipeline |
| Allure | Test reporting |
| Node.js v20 LTS | Runtime |

---

## How to Run

```bash
# Install dependencies
npm install

# Run all tests
npx playwright test

# Run a specific day
npx playwright test playwright/tests/day01.spec.ts

# Run a utility script
npx ts-node day02/bmi-calculator.ts

# View HTML report
npx playwright show-report reports/html
```