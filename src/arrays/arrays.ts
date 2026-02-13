/**
 * Complete the function body
 *
 * To run the tests : `deno test src/arrays/arrays_test.ts`
 *
 * As you will see, TypeScript will considerably
 * improve the autocomplete experience in your editor.
 */
export function removeNumbersBelowThreshold(
  array: number[],
  threshold: number,
): number[] | [] {
  // Write your code here
  const belowThresold: number[] = array.filter((num) => threshold <= num);
  return belowThresold;
}

export function filterStringByLength(
  array: string[],
  minLength: number,
  maxLength: number,
): string[] | [] {
  // Write your code here
  const wordFilter = array.filter((word) =>
    word.length >= minLength && word.length <= maxLength
  );
  return wordFilter;
}

export function getOnlyTheLowercaseLettersOfTheString(string: string): string {
  // Write your code here
  return string.replace(/[^a-z]/g, "");
}
