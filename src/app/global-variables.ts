export const author: string = 'Gowtham';

export const title: string = 'My first project';

export var diffMode: boolean = false;
export function setDiffMode(flag: boolean) {
  diffMode = flag;
  console.log(diffMode);
}
export function returnFiddMode() {
  return diffMode;
}
