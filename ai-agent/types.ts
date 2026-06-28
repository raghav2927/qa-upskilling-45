// ai-agent/types.ts

export interface TestRequirement {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

export interface GeneratedTestCase {
  id: string;
  requirementId: string;
  title: string;
  steps: string[];
  expectedResult: string;
  testType: 'positive' | 'negative' | 'edge';
}

export interface TestRunResult {
  testCaseId: string;
  status: 'passed' | 'failed' | 'skipped';
  durationMs: number;
  errorMessage?: string;    // optional — only present on failure
  screenshotPath?: string;
}

export interface TriageReport {
  runId: string;
  timestamp: string;
  totalTests: number;
  passed: number;
  failed: number;
  probableCause?: string;   // filled by AI
  suggestedFix?: string;    // filled by AI
}