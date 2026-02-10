/**
 * Complete the function body
 *
 * To run the tests : `deno test src/arrays/arrays_test.ts`
 *
 * As you will see, TypeScript will considerably
 * improve the autocomplete experience in your editor.
 */

import { error } from "node:console";

export function removeNumbersBelowThreshold(
  array: number[],
  threshold: number,
): number[] | [] {
  // Write your code here
  const isBigEnough = (threshold: number) => {
    return threshold < 3;
  };
  return array.filter(isBigEnough);
}

export function filterStringByLength(
  array: string[],
  minLength: number,
  maxLength: number,
): string[] | [] {
  // Write your code here
}

export function getOnlyTheLowercaseLettersOfTheString(string: string): string {
  // Write your code here
}
