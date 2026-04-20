import { items, colors, statuses } from "./MockData";

const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

const reorderColors = (colors: string[]): string[] => {
  const result: string[] = [];

  for (let i = 0; i < colors.length; i += 2) {
    if (i === 0) {
      result.push(colors[i]);
    } else if (i + 1 < colors.length) {
      result.push(colors[i + 1], colors[i]);
    } else {
      result.push(colors[i]);
    }
  }

  return result;
};

export const getJoinedArray = () => {
  const reorderedColors = reorderColors(colors);

  const maxLength = Math.max(
    items.length,
    colors.length,
    statuses.length
  );

  const result: string[] = [];

  for (let i = 0; i < maxLength; i++) {
    const item = items[i] ?? items[0]; 
    const color = reorderedColors[i];
    const status = statuses[i] ?? statuses[0];

    if (!color) continue;

    result.push(
      `${capitalize(item)} ${capitalize(color)} ${status}`
    );
  }

  return result;
};