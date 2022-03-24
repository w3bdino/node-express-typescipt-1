export const checkWordString = (word: string, contains: string[]): boolean => {
  const postMsg = word.toLowerCase().match(/\b(\w+)\b/g) as string[];
  const containsOneCommonItem = postMsg.some((x) => contains.some((y) => y === x));
  return containsOneCommonItem;
};
