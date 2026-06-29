// ai-agent/validator.ts
import { GeneratedTestCase } from './types';

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export function validateTestCase(tc: GeneratedTestCase): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Required field checks using conditionals
  if (!tc.id || tc.id.trim() === '') {
    errors.push('Test case must have an ID');
  }
  if (!tc.title || tc.title.trim() === '') {
    errors.push('Test case must have a title');
  }
  if (!tc.steps || tc.steps.length === 0) {
    errors.push('Test case must have at least one step');
  }
  if (!tc.expectedResult || tc.expectedResult.trim() === '') {
    errors.push('Test case must define an expected result');
  }

  // Warning checks — not failures, but worth flagging
  if (tc.steps.length > 15) {
    warnings.push('Test case has more than 15 steps — consider splitting it');
  }
  if (tc.testType === 'positive' && !tc.title.toLowerCase().includes('valid')) {
    warnings.push('Positive test title should indicate valid/happy path');
  }

  // Loop through steps looking for vague language
  const vagueWords: string[] = ['something', 'thing', 'stuff', 'etc'];
  for (const step of tc.steps) {
    for (const vague of vagueWords) {
      if (step.toLowerCase().includes(vague)) {
        warnings.push(`Step "${step.substring(0, 40)}..." contains vague language`);
        break;
      }
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}